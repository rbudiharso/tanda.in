/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates'
], function ($, _, Backbone, Marionette, JST) {
    'use strict';

    var NavItemView = Marionette.ItemView.extend({
        template: JST['app/scripts/templates/nav_item.ejs'],

        tagName: 'li',

        className: function () {
            return this.model.get('active') ? 'active' : '';
        },

        initialize: function () {
            this.listenTo(this.model, 'change:active', this.render);
        }
    });

    return NavItemView;
});
