/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'marionette'
], function ($, _, Backbone, Marionette) {
    'use strict';

    var LayoutView = Marionette.Layout.extend({
        regions: {
            header: '.header',
            content: '.content'
        }
    });

    return LayoutView;
});
