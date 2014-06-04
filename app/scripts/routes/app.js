/*global define*/

define([
    'jquery',
    'marionette',
    '../dropbox_client',
    '../controllers/app'
], function ($, Marionette, Client, AppController) {
    'use strict';

    var AppRouter = Marionette.AppRouter.extend({
        controller: AppController,
        appRoutes: {
            '': 'home',
            'about': 'about',
            'contact': 'contact',
            'bookmarks': 'bookmarks',
            'account': 'account',
            'signout': 'signout'
        },

        onRoute: function (name, path) {
            if (Client.isAuthenticated() && name === 'home' ) {
                this.navigate('bookmarks', true)
            }

            if (Client.isAuthenticated() && name === 'signout' ) {
                Client.DbClient.signOut(function () {
                    this.navigate('', true)
                }.bind(this));
            }
        }
    });

    return AppRouter;
});
