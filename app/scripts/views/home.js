/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates',
    '../dropbox_client'
], function ($, _, Backbone, Marionette, JST, Client) {
    'use strict';

    return Marionette.ItemView.extend({
        template: JST['app/scripts/templates/home.ejs'],

        className: 'jumbotron',

        events: {
            'click .connect': 'connect'
        },

        connect: function (evt) {
            evt.preventDefault();
            Client.authenticate();
        }
    });
});
