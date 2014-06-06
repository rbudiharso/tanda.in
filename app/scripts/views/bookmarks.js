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
        template: JST['app/scripts/templates/bookmarks.ejs'],

        events: {
            'keyup input.bookmark': 'addBookmark'
        },

        addBookmark: function (evt) {
            if (evt.keyCode === 13) {
                this.model.set('url', evt.target.value);
                this.model.save();
            }
        }
    });
});
