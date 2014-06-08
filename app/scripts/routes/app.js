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
            if (Client.isAuthenticated()) {
                if (name === 'home' ) {
                    this.navigate('bookmarks', true)
                }

                if (name === 'signout' ) {
                    Client.signOut(function () {
                        this.navigate('', true)
                    }.bind(this));
                }
            } else {
                if (name === 'bookmarks' || name === 'account' ) {
                    this.navigate('', true)
                }
            }
        }
    });

    return AppRouter;
});
