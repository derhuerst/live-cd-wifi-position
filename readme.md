# live-cd-wifi-position

**Live vehicle geolocation of České dráhy (Czech Railways) trains**, taken from the on-board WiFi system.

[![npm version](https://img.shields.io/npm/v/live-cd-wifi-position.svg)](https://www.npmjs.com/package/live-cd-wifi-position)
[![build status](https://api.travis-ci.org/derhuerst/live-cd-wifi-position.svg?branch=master)](https://travis-ci.org/derhuerst/live-cd-wifi-position)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/live-cd-wifi-position.svg)
![minimum Node.js version](https://img.shields.io/node/v/live-cd-wifi-position.svg)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)
[![chat with me on Twitter](https://img.shields.io/badge/chat%20with%20me-on%20Twitter-1da1f2.svg)](https://twitter.com/derhuerst)


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
- [`record-ice-movement`](https://github.com/derhuerst/record-ice-movement) – Record the movement of any [ICE](https://en.wikipedia.org/wiki/Intercity-Express) using the on-board WiFi.
- [`live-icomera-position`](htttps://github.com/derhuerst/live-icomera-position) – Live vehicle geolocation, taken from the on-board Icomera WiFi system.
- [`record-flixbus-movement`](htttps://github.com/derhuerst/record-flixbus-movement) – Command-line tool to record the movement of a [Flixbus](https://flixbus.de) coach using the on-board WiFi.
- [`live-gomedia-position`](htttps://github.com/derhuerst/live-gomedia-position) – Live vehicle geolocation, taken from the GoMedia on-board WiFi entertainment system.
- [`sncf-wifi-portal-client`](https://github.com/derhuerst/sncf-wifi-portal-client) – Query information from the SNCF WiFi portal in French TGV trains.
- [`record-tgv-movement`](https://github.com/derhuerst/record-tgv-movement) – Record the movement of any [TGV](https://en.wikipedia.org/wiki/TGV) using the [on-board WiFi](https://www.sncf.com/fr/offres-voyageurs/tgv/actualites/connectez-vous-pendant-votre-voyage).
- [`digital-im-regio-portal-client`](https://github.com/derhuerst/digital-im-regio-portal-client) – Query information from the Digital im Regio portal in German Regio trains.
- [`portale-regionale-wifi-position`](https://github.com/derhuerst/portale-regionale-wifi-position) – Query information from the *Portale Regionale* WiFi portal in Trenitalia (Italian Railways) trains.


## Contributing

If you have a question or need support using `live-cd-wifi-position`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, use [the issues page](https://github.com/derhuerst/live-cd-wifi-position/issues).
