'use strict'

const Provider = use('App/Models/Provider')

class ProviderController {

  async index({ auth  }) {
    const { id } = auth.user
    const providers = await Provider
      .query()
      .with('address')
      .where('user_id', id)
      .select(['name_fantasy', 'name_salesman', 'email','address_id', 'id'])
      .fetch()

    return providers;
  }

  /**
   * --------------------- DOCUMENTAÇÃO COMMENTS ---------------------
   * Chamando essa função somente quando tiver o ID do endereço para podemos
   * usar no [data] do store
   *
   * { address_id } = [POST] /addresses
   * [POST] /providers
   */
  async store ({ request, auth }) {
    const data = request.only(['name_fantasy', 'name_salesman', 'email','address_id'])

    const provider = await Provider.create({
      ...data,
      user_id: auth.user.id
    });

    return provider;
  }

  async update({ params, request }) {
    const provider = await Provider.findOrFail(params.id)

    const data = request.only([
      'name_fantasy',
      'name_salesman',
      'email',
    ])

    provider.merge(data)
    await provider.save()
    return provider
  }

  async destroy({ params, response }) {
    const { id } = params

    const provider = await Provider.find(id)

    if (!provider) {
      return response.status(400).json({ error: 'Provider not found' })
    }

    await provider.delete()

    return response.status(200).json()
  }
}

module.exports = ProviderController
