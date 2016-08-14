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

The demos connect to the public services running on `ws://bark.phon.ioc.ee`
and offer Estonian and English speech recognition.

To run the demos on localhost, start a local webservice, e.g.:

	python -m SimpleHTTPServer

and then open e.g. <http://localhost:8000/demos/mob.html>.

The demos are also available [here](http://kaljurand.github.io/dictate.js/).
Note that in newer versions of Google Chrome (48+) `getUserMedia()` does not work on
insecure origins. In order to still be able to use these demos you can disable the security check:

    google-chrome --unsafely-treat-insecure-origin-as-secure="http://kaljurand.github.io/" --user-data-dir="$HOME/testprofiledir"


Browser support
---------------

Known to work in
  - Google Chrome 52.0 on Ubuntu desktop
  - Google Chrome 45.0 on Android 5.1
  - Firefox 37.0.1 on Ubuntu desktop (unstable: often seems to lose connection to microphone)
  - Firefox 41.0 on Android 5.1 (unstable: often seems to lose connection to microphone)

See also
--------

- [Dikteeri](https://bark.phon.ioc.ee/dikteeri/) is an Estonian dictation demo by the [Laboratory of Phonetics and Speech Technology](https://phon.ioc.ee/dokuwiki/doku.php?id=start.en) (in Estonian). Uses `dictate.js`.
- [Kõnele](https://github.com/Kaljurand/K6nele) contains an Android front-end to the Kaldi GStreamer server
