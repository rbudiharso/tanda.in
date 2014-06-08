/*global define*/

define([
    'underscore',
    'backbone',
    'dropbox_sync'
], function (_, Backbone) {
    'use strict';

    return Backbone.Model.extend({
        initialize: function(attributes, options) {
            this.client = options.client;
            this.datastoreTable = 'bookmarks';
        },

        defaults: {
            url: '',
            title: ''
        },

        validate: function(attrs, options) {
        },
    });
});
