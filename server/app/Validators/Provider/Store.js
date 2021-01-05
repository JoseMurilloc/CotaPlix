'use strict'

class Store {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name_fantasy: 'required',
      name_salesman: 'required',
      email: 'required|email|unique:providers',
      address_id: 'required'
    }
  }
}

module.exports = Store
