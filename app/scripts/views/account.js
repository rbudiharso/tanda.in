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

        initialize: function (attributes, options) {
            this.model.fetch();

            this.listenTo(this.model, 'change', this.render);
        }
    });
});
