define([
    'dropbox'
],
function (Dropbox) {
    'use strict';

    var appKey = 'YOUR APP KEY';
    return new Dropbox.Client({key: appKey});
});
