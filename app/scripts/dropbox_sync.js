'use strict';

define(function (require) {
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');

    Backbone.sync = (function (method, model, options) {
        console.log(method);
        console.log(model);
        //console.log(options);

        var client = model.client || model.collection.client;
        if (!client) { throw new Error('Dropbox.Client not supplied'); }


        function getDatastore() {
            var deferred = Backbone.$.Deferred();
            var manager = client.getDatastoreManager();

            if (window.Datastore) {
                deferred.resolve(window.Datastore);
            } else {
                manager.openDefaultDatastore(function (error, datastore) {
                    if (error) { deferred.reject(new Error('Failed when opening default datastore: '+ error)) }

                    window.Datastore = datastore;
                    deferred.resolve(datastore);
                });
            }

            return deferred;
        };

        function getRecords () {
            var table, records;

            getDatastore().done(function (ds) {
                table = ds.getTable(model.datastoreTable);
                records = _.map(table.query(), function (rec) {
                    return _.extend(rec.getFields(), {id: rec.getId()});
                });
                options.success(records);
            });
        };

        function createRecord() {
            var table, record;

            getDatastore().done(function (ds) {
                table = ds.getTable(model.datastoreTable);
                record = table.insert(model.attributes);
                options.success(record);
            });
        };

        function deleteRecord () {
            var table, record;

            getDatastore().done(function (ds) {
                table = ds.getTable(model.datastoreTable);
                record = table.get(model.get('id'));
                record.deleteRecord();
                options.success(record);
            });
        };

        switch (method) {
            case 'read':
                getRecords();
                break;
            case 'delete':
                deleteRecord();
                break;
            case 'create':
                createRecord();
                break;
        }
    });

    return Backbone;
});
