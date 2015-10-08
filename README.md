dictate.js
==========

__dictate.js__ is a small Javascript library for browser-based real-time speech recognition.
It uses [Recorderjs](https://github.com/mattdiamond/Recorderjs) for audio capture,
and a WebSocket connection to the
[Kaldi GStreamer server](https://github.com/alumae/kaldi-gstreamer-server) for speech recognition.

API
---

The API is modelled after [Android's SpeechRecognizer](http://developer.android.com/reference/android/speech/SpeechRecognizer.html).
See the source code of [lib/dictate.js](lib/dictate.js) and
the usage in [demos/demo.js](demos/demo.js).

Running the demos
-----------------

To run the demos on localhost, start a local webservice, e.g.:

	python -m SimpleHTTPServer

and then open e.g. <http://localhost:8000/demos/mob.html>.

In order to avoid the repeated request for access to the microphone use
a https-URL, this works e.g. with Google App Engine.

Some demos are available [here](http://kaljurand.github.io/dictate.js/).

The demos offer Estonian and English speech recognition.

Browser support
---------------

Known to work in
  - Google Chrome 41.0 on Ubuntu desktop
  - Google Chrome 45.0 on Android 5.1
  - Firefox 37.0.1 on Ubuntu desktop (unstable: often seems to lose connection to microphone)
  - Firefox 41.0 on Android 5.1 (unstable: often seems to lose connection to microphone)

See also
--------

- [Kõnele](https://github.com/Kaljurand/K6nele) contains an Android front-end to the Kaldi GStreamer server
