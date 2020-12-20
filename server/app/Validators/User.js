'use strict'

class User {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      name: 'required|min: 10',
      email: 'required|email|unique:users',
      password: 'required|confirmed'
    }
  }
}

module.exports = User
