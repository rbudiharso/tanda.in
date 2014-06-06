/*global define*/

define([
    'underscore',
    'backbone',
    'dropbox_datastore'
], function (_, Backbone, Datastore) {
    'use strict';

    return Datastore.extend({
        initialize: function(attributes, options) {
            this.client = options.client;
        },

        tableName: 'bookmarks',

        defaults: {
            url: '',
            title: ''
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });
});
