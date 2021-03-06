# live-cd-wifi-position

**Live vehicle geolocation of České dráhy (Czech Railways) trains**, taken from the on-board WiFi system.

[![npm version](https://img.shields.io/npm/v/live-cd-wifi-position.svg)](https://www.npmjs.com/package/live-cd-wifi-position)
[![build status](https://api.travis-ci.org/derhuerst/live-cd-wifi-position.svg?branch=master)](https://travis-ci.org/derhuerst/live-cd-wifi-position)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/live-cd-wifi-position.svg)
![minimum Node.js version](https://img.shields.io/node/v/live-cd-wifi-position.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)


## Installation

```shell
npm install live-cd-wifi-position
```


## Usage

`asStream()` returns a [readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable) in [object mode](https://nodejs.org/api/stream.html#stream_object_mode).

```js
const {asStream} = require('live-cd-wifi-position')
const ndjson = require('ndjson')

const positions = asStream()
positions.on('error', console.error)
positions
.pipe(ndjson.stringify())
.pipe(process.stdout)
```

An individual data point will look like this:

```js
{
	latitude: 50.62498,
	longitude: 14.055638,
	altitude: 143,
	speed: 88, // km/h
}
```

You can also use the [`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter)-based API:

```js
const {asEventEmitter} = require('live-cd-wifi-position')

const positions = asEventEmitter()
positions.on('error', console.error)
positions.on('data', data => console.log(data))
```


## Related

- [`cd-wifi-client`](https://github.com/derhuerst/cd-wifi-client) – A client for the WiFi portal of Czech Railways trains.
- [`wifi-on-ice-position-stream`](https://github.com/derhuerst/wifi-on-ice-position-stream) – A stream of positions of German Railways ICE trains, taken from the on-board WiFi.
- [`wifi-on-ice-portal-client`](https://github.com/derhuerst/wifi-on-ice-portal-client) – Query information from the WiFi portal in German ICE trains.


## Contributing

If you have a question or need support using `live-cd-wifi-position`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, use [the issues page](https://github.com/derhuerst/live-cd-wifi-position/issues).
