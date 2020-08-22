'use strict'

const ndjson = require('ndjson')
const {asEventEmitter, asStream} = require('.')

const onError = (err) => {
	console.error(err)
	process.exit(1)
}

// const positions = asStream()
// positions.pipe(ndjson.stringify()).pipe(process.stdout)
// positions.on('error', onError)

const positions = asEventEmitter()
positions.on('data', data => console.log(data))
positions.on('error', onError)
