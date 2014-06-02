/*global define*/

define([
    'jquery',
    'marionette',
    '../controllers/app'
], function ($, Marionette, AppController) {
    'use strict';

    var AppRouter = Marionette.AppRouter.extend({
        controller: AppController,
        appRoutes: {
            '': 'home',
            'about': 'about',
            'contact': 'contact'
        }
    });

    return AppRouter;
});
