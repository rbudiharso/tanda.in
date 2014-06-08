/*global define*/

define([
    'xdomainajax',
    'underscore',
    'backbone',
    'marionette',
    'templates',
    './bookmark',
    './empty',
    '../collections/bookmarks',
], function ($, _, Backbone, Marionette, JST, BookmarkView, EmptyView, BookmarksCollection) {
    'use strict';

    return Marionette.CompositeView.extend({
        template: JST['app/scripts/templates/bookmarks.ejs'],
        itemView: BookmarkView,
        emptyView: EmptyView,
        itemViewContainer: '#bookmarks',

        events: {
            'keyup input.bookmark': 'addBookmark',
            'click button[type="submit"]': 'addBookmark'
        },

        initialize: function () {
            this.collection.fetch({reset: true});

            this.listenTo(this.collection, 'add', this.resetInput);

            this.resetInput();
        },

        createBookmark: function(data) {
            var title = data.responseText.match(/\<title\>(.*)\<\/title\>/)[1];
            var timestamp = new Date;
            var attributes = {
                url: data.url,
                title: title,
                createdAt: timestamp,
                updatedAt: timestamp
            };
            this.collection.create(attributes);
        },

        addBookmark: function (evt) {
            if (evt.target.tagName.toLowerCase() == 'button' || (evt.keyCode === 13 && evt.target.value.length)) {
                this.$('button').attr('disabled', 'disabled');
                $.ajax({
                    url: this.$('input.bookmark').val(),
                    type: 'head',
                    success: this.createBookmark.bind(this),
                    error: function () {
                        console.log(arguments);
                    }
                });
            }
        },

        resetInput: function () {
            this.$('input').val('');
            this.$('button').removeAttr('disabled');
        }
    });
});
