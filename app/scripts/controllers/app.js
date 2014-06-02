'use strict';

define([
    'jquery',
    'backbone',
    'marionette',
    '../views/layout',
    '../views/navigation',
    '../views/home'
],
function ($, Backbone, Marionette, LayoutView, NavigationView, HomeView) {
    var Controller = {};
    var layoutView;
    var navigationView;
    var navs = new Backbone.Collection();

    var navigations = {
        home: [
            { href: '#', title: 'Home', id: 'home' },
            { href: '#about', title: 'About', id: 'about' },
            { href: '#contact', title: 'Contact', id: 'contact' }
        ]
    };

    function showNav (nav, activeNav) {
        navs.reset(navigations[nav]);
        navs.get(activeNav).set('active', true);
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
        showLayout();
        var view = new HomeView();
        layoutView.content.show(view);
    };

    Controller.about = function () {
        showNav('home', 'about');
        showLayout();
    };

    Controller.contact = function () {
        showNav('home', 'contact');
        showLayout();
    };

    return Controller;
});
