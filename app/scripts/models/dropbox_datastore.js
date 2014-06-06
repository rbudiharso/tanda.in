/*global define*/

define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    return Backbone.Model.extend({
        transaction: function () {
            if (!this.client) { throw new Error('Dropbox.Client not supplied'); }
            if (!this.tableName) { throw new Error('Table name is empty'); }

            var deferred = $.Deferred();

            this.manager = this.client.getDatastoreManager();
            this.manager.openDefaultDatastore(function (error, datastore) {
                if (error) { deferred.reject(new Error('Failed when opening default datastore: '+ error)) }

                deferred.resolve(datastore);
            });

            return deferred;
        },

        save: function (options, callback) {
            if (!options) { options = {}; }
            if (!callback) {
                callback = options;
                options = {};
            }

            var transaction = this.transaction();

            transaction.done(function (datastore, table) {
                this.datastore = datastore;
                this.table = datastore.getTable(this.tableName);
                this._save();

                if (callback.success && _.isFunction(callback.success)) {
                    callback.success.call(null, this, this);
                }
            }.bind(this));

            transaction.fail(function (error) {
                if (callback.error && _.isFunction(callback.error)) {
                    callback.error.call(null, this, error);
                }
            });
        },

        _save: function () {
            var timestamp = new Date();
            if (this.isNew()) { this.set('createdAt', timestamp, { silent: true }); }
            this.set('updatedAt', timestamp, { silent: true });

            this.isNew() ? this._insert() : this._update();
        },

        _insert: function () {
            var record = this.table.insert(this._dataJSON());
            this.set(record, { silent: true });
        },

        _update: function () {
            var record = this.table.update(this._dataJSON());
            this.set(record, { silent: true });
        },

        _dataJSON: function () {
            return _.omit(this.toJSON(), 'dropboxClient');
        }
    });
});
