/*global define*/

define([
    'underscore',
    'backbone',
    '../dropbox_client'
], function (_, Backbone, Client) {
    'use strict';

    return Backbone.Model.extend({
        fetch: function () {
            Client.getAccountInfo(function (error, account) {
                if (error) { throw new Error(error); }

                this.set(account);
                console.log(account);
            }.bind(this));
        }
    });
});
