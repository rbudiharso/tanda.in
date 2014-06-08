'use strict';

define(function (require) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Client = require('../dropbox_client');
    var LayoutView = require('../views/layout');
    var NavigationView = require('../views/navigation');
    var HomeView = require('../views/home');
    var AboutView = require('../views/about');
    var ContactView = require('../views/contact');
    var BookmarksView = require('../views/bookmarks');
    var AccountView = require('../views/account');
    var BookmarkModel = require('../models/bookmark');
    var AccountModel = require('../models/account');
    var BookmarksCollection = require('../collections/bookmarks');

    var Controller = {};
    var layoutView;
    var navigationView;
    var navs = new Backbone.Collection();

    var navigations = {
        home: [
            { href: '#', title: 'Home', id: 'home' },
            { href: '#about', title: 'About', id: 'about' },
            { href: '#contact', title: 'Contact', id: 'contact' }
        ],
        bookmarks: [
            { href: '#bookmarks', title: 'Bookmarks', id: 'bookmarks' },
            { href: '#account', title: 'My Account', id: 'account' },
            { href: '#signout', title: 'Sign Out', id: 'signout' }
        ]
    };

    function showNav (nav, activeNav) {
        navs.reset(navigations[nav]);
        navs.get(activeNav).set('active', true);
        showLayout();
    }

    function showLayout () {
        if (!layoutView) {
            layoutView = new LayoutView({
                el: '.container'
            });
        }

        navigationView = new NavigationView({
            collection: navs
        });
        layoutView.header.show(navigationView);
    }

    Controller.home = function () {
        showNav('home', 'home');
        var view = new HomeView();
        layoutView.content.show(view);
    };

    Controller.about = function () {
        showNav('home', 'about');
        var view = new AboutView();
        layoutView.content.show(view);
    };

    Controller.contact = function () {
        showNav('home', 'contact');
        var view = new ContactView();
        layoutView.content.show(view);
    };

    Controller.bookmarks = function () {
        showNav('bookmarks', 'bookmarks');
        var bookmarks = new BookmarksCollection([], {
            client: Client
        });
        var view = new BookmarksView({
            collection: bookmarks
        });
        layoutView.content.show(view);
    };

    Controller.account = function () {
        showNav('bookmarks', 'account');
        var accountModel = new AccountModel();
        var view = new AccountView({ model: accountModel });
        layoutView.content.show(view);
    };

    Controller.signout = function () {
        showNav('bookmarks', 'signout');
    };

    return Controller;
});
