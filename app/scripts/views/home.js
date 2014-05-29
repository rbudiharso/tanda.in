/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    '../dropbox_client',
    'templates'
], function ($, _, Backbone, Marionette, Client, JST) {
    'use strict';

    var HomeView = Marionette.ItemView.extend({
        template: JST['app/scripts/templates/home.ejs'],

        className: 'jumbotron',

        events: {
            'click .connect-dropbox': 'connect'
        },

        connect: function (evt) {
        }
    });

    return HomeView;
});
