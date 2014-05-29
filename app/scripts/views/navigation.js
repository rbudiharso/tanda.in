/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates',
    './nav_item'
], function ($, _, Backbone, Marionette, JST, NavItemView) {
    'use strict';

    var NavigationView = Marionette.CompositeView.extend({
        template: JST['app/scripts/templates/navigation.ejs'],

        itemViewContainer: function () {
            return "ul.nav";
        },

        itemView: NavItemView
    });

    return NavigationView;
});
