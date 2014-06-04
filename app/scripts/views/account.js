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
        template: JST['app/scripts/templates/account.ejs'],
    });
});
