define([
    'dropbox'
],
function (Dropbox) {
    'use strict';

    var appKey = 'YOUR APP KEY';
    var Client = {};
    var DbClient = new Dropbox.Client({key: appKey});

    Client.DbClient = DbClient;

    Client.checkAuth = function (errorCallback) {
        DbClient.authenticate({interactive: false}, function (error) {
            return errorCallback.call(DbClient, error);
        });
        return DbClient.isAuthenticated();
    };

    Client.authenticate = function (errorCallback) {
        errorCallback = errorCallback || function () {};

        DbClient.authenticate({interactive: true}, function (error) {
            return errorCallback.call(DbClient, error);
        });

        DbClient.authenticate();
    };

    Client.isAuthenticated = function () {
        return DbClient.isAuthenticated();
    };

    return Client;
});
