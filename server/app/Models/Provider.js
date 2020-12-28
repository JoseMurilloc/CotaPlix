'use strict'

const Model = use('Model')

class Provider extends Model {

  static boot () {
    super.boot()
    this.addHook(
      'afterDelete',
      'ProviderHook.deleteAddressOfProduct'
    )
  }

  address () {
    return this.belongsTo('App/Models/Address')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Provider
