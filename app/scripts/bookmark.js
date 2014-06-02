
/*global require*/
'use strict';

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
    'domready',
    './dropbox_client'
], function (domReady, Client) {
    domReady(function () {
        Client.authenticate(function (error) {
            if (error) alert('Authentication error: ' + error);
        });

        if (!Client.isAuthenticated()) {
            window.location.assign('/index.html');
        }
    });
});
