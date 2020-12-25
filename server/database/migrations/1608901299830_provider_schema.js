'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProviderSchema extends Schema {
  up () {

    this.create('addresses', (table) => {
      table.increments()
      table.string('uf').notNullable()
      table.string('state').notNullable()
      table.string('city').notNullable()
      table.string('neighborhood').notNullable()
      table.integer('number').notNullable()

      table.timestamps()
    })


    this.create('providers', (table) => {
      table.increments()
      table.string('name_fantasy', 80).notNullable().unique()
      table.string('name_salesman', 60).notNullable()
      table.string('email', 60).unique()

      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.integer('address_id')
        .unsigned()
        .references('id')
        .inTable('addresses')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
    this.drop('providers')
  }
}

module.exports = ProviderSchema
