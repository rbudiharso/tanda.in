/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates'
], function ($, _, Backbone, Marionette, JST) {
    'use strict';

    var LayoutView = Marionette.Layout.extend({
        regions: {
            header: ".header",
            content: ".content"
        }
    });

    return LayoutView;
});
