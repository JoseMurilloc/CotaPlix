'use strict'

const Address = use('App/Models/Address')
const Provider = use('App/Models/Provider')
const AppError = require('../../Exceptions/AppError')

const ProviderHook = exports = module.exports = {}

ProviderHook.checkExistAddressTheProvider = async (providerInstance) => {
  const address = await Address.find(providerInstance.address_id)

  const existAddress = !!address

  if(!existAddress) {
    throw new AppError('Address not found')
  }
}

ProviderHook.deleteAddressOfProvider = async (providerInstance) => {

  const address = await Address.find(providerInstance.address_id)

  const provider = await Provider.findBy({
    address_id: address.id
  })

  const existProviderWithAddresses  = !!provider


  if (!existProviderWithAddresses) {
    await address.delete()
  }
}
