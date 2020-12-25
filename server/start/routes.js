'use strict'

const Route = use('Route')


Route.post('/users', 'UserController.store').validator('User')
Route.get('/user', 'UserController.show').middleware(['auth'])

Route.post('/auth', 'AuthController.store')

Route.post('/forgot_pasword', 'ForgotPasswordController.store')
Route.put('/forgot_pasword', 'ForgotPasswordController.update')


Route.resource('products','ProductController')
  .only(['store', 'index', 'update', 'destroy']).middleware(['auth'])

Route.post('/addresses', 'AddressController.store')

Route.post('/providers', 'ProviderController.store')
