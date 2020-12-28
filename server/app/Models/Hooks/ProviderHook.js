'use strict'

const Address = use('App/Models/Address')

const ProviderHook = exports = module.exports = {}

ProviderHook.deleteAddressOfProvider = async (providerInstance) => {

  const address = await Address.find(providerInstance.address_id)

  await address.delete()

}
