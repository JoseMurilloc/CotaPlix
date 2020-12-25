'use strict'

const Provider = use('App/Models/Provider')

class ProviderController {

  async index({ auth  }) {
    const { id } = auth.user
    const providers = await Provider
      .query()
      .with('address')
      .where('user_id', id)
      .select(['name_fantasy', 'name_salesman', 'email','address_id'])
      .fetch()

    return providers;
  }

  async store ({ request, auth }) {
    const data = request.only(['name_fantasy', 'name_salesman', 'email','address_id'])

    const provider = await Provider.create({
      ...data,
      user_id: auth.user.id
    });

    return provider;

  }
}

module.exports = ProviderController
