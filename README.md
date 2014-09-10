dictate.js
==========

__dictate.js__ is a small Javascript library for browser-based real-time speech recognition.
It uses [Recorderjs](https://github.com/mattdiamond/Recorderjs) for audio capture,
and a WebSocket connection to the
[Kaldi GStreamer server](https://github.com/alumae/kaldi-gstreamer-server) for (Estonian and English) speech recognition.

API
---

The API is modelled after [Android's SpeechRecognizer](http://developer.android.com/reference/android/speech/SpeechRecognizer.html).
See the source code of [lib/dictate.js](lib/dictate.js) and
the usage in [demos/demo.js](demos/demo.js).

Running the demos
-----------------

To run the demos on localhost, start a local webservice, e.g.:

	python -m SimpleHTTPServer

and then open e.g. <http://localhost:8000/demos/diff.html>.

In order to avoid the repeated request for access to the microphone use
a https-URL, this works e.g. with Google App Engine.

Some demos are available [here](http://kaljurand.github.io/dictate.js/).

Browser support
---------------

Known to work in
  - Google Chrome 36.0.1985.125 on Ubuntu desktop
  - Google Chrome 37.0.2062.117 on Android
