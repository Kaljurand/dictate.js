// Global UI elements:
//  - log: event log
//  - trans: transcription window

// Global objects:
//  - tt: simple structure for managing the list of hypotheses
//  - dictate: dictate object with control methods 'init', 'startListening', ...
//       and event callbacks onResults, onError, ...
var tt = new Transcription();

var dictate = new Dictate({
		recorderWorkerPath : '../lib/recorderWorker.js',
		onReadyForSpeech : function() {
			__message("READY FOR SPEECH");
			__status("Kuulan ja transkribeerin...");
		},
		onEndOfSpeech : function() {
			__message("END OF SPEECH");
			__status("Transkribeerin...");
		},
		onEndOfSession : function() {
			__message("END OF SESSION");
			__status("");
		},
		onServerStatus : function(json) {
			__serverStatus(json.num_workers_available + ':' + json.num_requests_processed);
			if (json.num_workers_available == 0) {
				$("#buttonStart").prop("disabled", true);
				$("#serverStatusBar").addClass("highlight");
			} else {
				$("#buttonStart").prop("disabled", false);
				$("#serverStatusBar").removeClass("highlight");
			}
		},
		onPartialResults : function(hypos) {
			// TODO: demo the case where there are more hypos
			tt.add(hypos[0].transcript, false);
			__updateTranscript(tt.toString());
		},
		onResults : function(hypos) {
			// TODO: demo the case where there are more results
			tt.add(hypos[0].transcript, true);
			__updateTranscript(tt.toString());
			// diff() is defined only in diff.html
			if (typeof(diff) == "function") {
				diff();
			}
		},
		onError : function(code, data) {
			__error(code, data);
			__status("Viga: " + code);
			dictate.cancel();
		},
		onEvent : function(code, data) {
			__message(code, data);
		}
	});

// Private methods (called from the callbacks)
function __message(code, data) {
	log.innerHTML = "msg: " + code + ": " + (data || '') + "\n" + log.innerHTML;
}

function __error(code, data) {
	log.innerHTML = "ERR: " + code + ": " + (data || '') + "\n" + log.innerHTML;
}

function __status(msg) {
	statusBar.innerHTML = msg;
}

function __serverStatus(msg) {
	serverStatusBar.innerHTML = msg;
}

function __updateTranscript(text) {
	$("#trans").val(text);
}

// Public methods (called from the GUI)
function toggleLog() {
	$(log).toggle();
}
function clearLog() {
	log.innerHTML = "";
}

function clearTranscription() {
	tt = new Transcription();
	$("#trans").val("");
}

function startListening() {
	dictate.startListening();
}

function stopListening() {
	dictate.stopListening();
}

function cancel() {
	dictate.cancel();
}

function init() {
	dictate.init();
}

function showConfig() {
	var pp = JSON.stringify(dictate.getConfig(), undefined, 2);
	log.innerHTML = pp + "\n" + log.innerHTML;
	$(log).show();
}

window.onload = function() {
	init();
};
