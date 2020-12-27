'use strict'

class Store {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      description: 'required',
      price: 'required',
      code_bar: 'required',
      unity: 'required'
    }
  }
}

module.exports = Store
