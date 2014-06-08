/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates'
], function ($, _, Backbone, Marionette, JST) {
    'use strict';

    return Marionette.ItemView.extend({
        template: JST['app/scripts/templates/bookmark.ejs'],

        tagName: 'li',

        events: {
            'click .delete': 'deleteBookmark'
        },

        deleteBookmark: function () {
            this.model.destroy();
        }
    });
});
