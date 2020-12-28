'use strict'

const Schema = use('Schema')

class AddressUpdatedSchema extends Schema {
  up () {
    this.alter('addresses', (table) => {
      // Remover UF e adicionar Street(rua)
      table.dropColumn('uf')
      table.string('street')
    })
  }

  down () {
    this.table('addresses', (table) => {
      // reverse alternations
      table.string('uf')
      table.droptable('street')
    })
  }
}

module.exports = AddressUpdatedSchema
