'use strict'

const {strictEqual: eql, ok, ifError} = require('assert')
const {fetchPosition} = require('.')

fetchPosition()
.then((_) => {
	console.info(_)

	eql(typeof _.latitude, 'number')
	ok(!Number.isNaN(_.latitude))
	ok(_.latitude >= -90)
	ok(_.latitude <= 90)

	eql(typeof _.longitude, 'number')
	ok(!Number.isNaN(_.longitude))
	ok(_.longitude >= -180)
	ok(_.longitude <= 180)

	eql(typeof _.altitude, 'number')
	ok(!Number.isNaN(_.altitude))
	ok(_.altitude >= -5000)
	ok(_.altitude <= 15000)

	eql(typeof _.speed, 'number')
	ok(!Number.isNaN(_.speed))
	ok(_.speed >= 0)
	ok(_.speed <= 1500)

	console.info('looks good ✔︎')
})
.catch((err) => {
	console.error(err)
	process.exit(1)
})
