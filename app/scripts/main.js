'use strict';

var protocol = window.location.protocol;
var hostname = window.location.hostname;
if (protocol != "https:" && hostname !== 'localhost') {
    window.location.assign("https:" + window.location.href.substring(protocol.length));
}

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        dropbox: {
            exports: 'Dropbox'
        }
    },
    paths: {
        domready: '../bower_components/requirejs-domready/domReady',
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        dropbox: 'https://www.dropbox.com/static/api/dropbox-datastores-1.0-latest',
        marionette: '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr' : '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter' : '../bower_components/backbone.babysitter/lib/backbone.babysitter'
    }
});

require([
    'backbone',
    'domready',
    'routes/app',
    'dropbox_client'
], function (Backbone, domReady, AppRouter, Client) {
    Client.DbClient.authenticate({interactive: false}, function (error) {
        if (error) { console.log('Error '+error); }
    });

    if (Client.DbClient.isAuthenticated()) { window.location.assign('/#bookmarks'); }

    domReady(function () {
        new AppRouter();
        Backbone.history.start();
    });
});

