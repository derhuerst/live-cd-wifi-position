'use strict'

const {fetchTrainStatus} = require('cd-wifi-client')
const {EventEmitter} = require('events')
const {Readable} = require('stream')

// It seems that the geolocation is updated roughly every 12s.
const DEFAULT_INTERVAL = 6 * 1000

const fetchPosition = async () => {
	const trainStatus = await fetchTrainStatus()
	return {
		latitude: trainStatus.latitude,
		longitude: trainStatus.longitude,
		altitude: trainStatus.altitude,
		speed: trainStatus.speed,
	}
}

const livePositionsAsEventEmitter = (opt = {}) => {
	const {
		interval,
	} = {
		interval: DEFAULT_INTERVAL,
		...opt,
	}
	const out = new EventEmitter()

	const fetch = () => {
		fetchPosition()
		.then(data => out.emit('data', data))
		.catch(err => out.emit('error', err))
		timer = setTimeout(fetch, interval)
	}
	let timer = setTimeout(fetch, interval)

	out.stop = () => {
		if (timer === null) return;
		clearTimeout(timer)
		timer = null
	}

	return out
}

const livePositionsAsReadableStream = (opt = {}) => {
	const {
		interval,
	} = {
		interval: DEFAULT_INTERVAL,
		...opt,
	}

	const fetch = async () => {
		try {
			const data = await fetchPosition()
			out.push(data)
		} catch (err) {
			out.destroy(err)
		}
		timer = setTimeout(fetch, interval)
	}
	let timer = setTimeout(fetch, interval)

	const out = new Readable({
		objectMode: true,
		read: () => {},
		destroy: (err, cb) => {
			if (timer !== null) {
				clearTimeout(timer)
				timer = null
			}
			cb(err)
		}
	})
	return out
}

module.exports = {
	fetchPosition,
	asEventEmitter: livePositionsAsEventEmitter,
	asStream: livePositionsAsReadableStream,
}
