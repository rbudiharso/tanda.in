/*global define*/

define([
    'underscore',
    'backbone',
    '../models/bookmark',
    'dropbox_sync'
], function (_, Backbone, BookmarkModel) {
    'use strict';

    return Backbone.Collection.extend({
        model: BookmarkModel,

        initialize: function (models, options) {
            this.client = options.client;
            this.datastoreTable = 'bookmarks';
        }
    });
});
