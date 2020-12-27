'use strict'

const Address = use('App/Models/Address')

class AddressController {
  async store({ request }) {

    const data = request.only(['uf', 'state', 'city', 'neighborhood', 'number']);

    const address = await Address.create(data)

    return address
  }
}

module.exports = AddressController
