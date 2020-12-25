'use strict'

const Provider = use('App/Models/Provider')

class ProviderController {

  async store ({ request, auth }) {
    await auth.check();

    const data = request.only(['name_fantasy', 'name_salesman', 'email','address_id'])

    const provider = await Provider.create({
      ...data,
      user_id: auth.user.id
    });

    return provider;

  }
}

module.exports = ProviderController
