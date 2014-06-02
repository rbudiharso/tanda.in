/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates'
], function ($, _, Backbone, Marionette, JST) {
    'use strict';

    var HomeView = Marionette.ItemView.extend({
        template: JST['app/scripts/templates/home.ejs'],

        className: 'jumbotron',
    });

    return HomeView;
});
