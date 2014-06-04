'use strict';

define([
    'jquery',
    'backbone',
    'marionette',
    '../views/layout',
    '../views/navigation',
    '../views/home',
    '../views/about',
    '../views/contact'
],
function ($, Backbone, Marionette, LayoutView, NavigationView, HomeView, AboutView, ContactView) {
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
    };

    Controller.account = function () {
        showNav('bookmarks', 'account');
    };

    Controller.signout = function () {
        showNav('bookmarks', 'signout');
    };

    return Controller;
});
