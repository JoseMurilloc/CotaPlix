'use strict'

const Schema = use('Schema')

class AddTokenEmailUserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('token')
      table.timestamp('token_created_at')
    })
  }

  down () {
    this.table('users', (table) => {
      // table
    })
  }
}

module.exports = AddTokenEmailUserSchema
