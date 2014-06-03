'use strict';

require([
    'domready',
    'dropbox_client'
], function (domReady, Client) {
    domReady(function () {
        Client.authenticate(function (error) {
            if (error) { window.alert('Authentication error: ' + error); }
        });

        if (Client.isAuthenticated()) { window.location.assign('/bookmarks.html'); }

        Client.authenticate();
    });
});
