'use strict';

exports.up = function(knex, Promise) {
    knex.schema.withSchema('public').createTable('users', function (table) {
        table.increments('id-user').primary();
        table.string('login');
        table.string('password');
        table.string('email');
        table.string('firstname');
        table.string('lastname');
        table.string('company');
        table.string('function');
    });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('users');
};
