// Mother Tongues UI
// Copyright (C) 2016  Aidan Pine
'use strict';

if (typeof (String.prototype.trim) === "undefined") {
    String.prototype.trim = function () {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}


function makeLinkSafe(entryID) {
    return entryID.replace(" ", "+");
}

var allEntries = [];

function getAllEntries() {
    if (allEntries.length > 0) {
        return allEntries;
    } else {
        allEntries = dataDict
        return allEntries;
    }
}

var allWords = []

function getAllWords() {
    if (allWords.length > 0) {
        return allWords;
    }
    $.each(dataDict, function (i, entry) {
        if (entry["source"] === 'words'){
            allWords.push(entry);
        }
    });
    return allWords;
}

var audioEntries = [];


function getAllAudioEntries() {
    if (audioEntries.length > 0) {
        return audioEntries;
    }
    $.each(dataDict, function (i, entry) {
            if (entry["audio"]) {
                audioEntries.push(entry);
            }
    });
    return audioEntries;
}