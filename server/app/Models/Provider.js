'use strict'

const Model = use('Model')

class Provider extends Model {
  address () {
    return this.belongsTo('App/Models/Address')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Provider
