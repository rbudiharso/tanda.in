'use strict';

require([
    'domready',
    'dropbox_client'
], function (domReady, Client) {
    domReady(function () {
        Client.authenticate(function (error) {
            if (error) { window.alert('Authentication error: ' + error); }
        });

        if (!Client.isAuthenticated()) {
            window.location.assign('/index.html');
        }

        Client.DbClient.getAccountInfo(function (error, account) {
            console.log(account);
        });

    });
});
