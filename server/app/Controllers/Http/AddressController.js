'use strict'

const Address = use('App/Models/Address')

class AddressController {
  async store({ request }) {

    const data = request.only(
      ['state', 'city', 'neighborhood', 'number', 'street']
    );

    const addressExist = await Address
      .findBy({
        street: data.street,
        neighborhood: data.neighborhood
      })

    if (addressExist) {
      return addressExist
    }

    const address = await Address.create(data)

    return address
  }
}

module.exports = AddressController
