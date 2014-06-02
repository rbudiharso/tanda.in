'use strict';

require([
    'backbone',
    'domready',
    'routes/app',
    'dropbox_client'
], function (Backbone, domReady, AppRouter, Client) {
    domReady(function () {
        //Client.authenticate(function (error) {
        //if (error) { window.alert('Authentication error: ' + error); }
        //});

        if (Client.isAuthenticated()) { window.location.assign('/bookmarks.html'); }
    });

    new AppRouter();
    Backbone.history.start();
});

