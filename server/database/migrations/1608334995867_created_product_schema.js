'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreatedProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('description').notNullable()
      table.string('code_bar').notNullable().unique()
      table.float('price').notNullable()
      table.string('unity').notNullable()

      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')


      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = CreatedProductSchema
