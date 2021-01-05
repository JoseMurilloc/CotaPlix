'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.store').validator('User/Store')
Route.get('/user', 'UserController.show').middleware(['auth'])

Route.post('/auth', 'AuthController.store')

Route.post('/forgot', 'ForgotPasswordController.store')
Route.post('/reset', 'ResetPasswordController.store')


Route.group(() => {
  Route.post('/addresses', 'AddressController.store')

  Route.resource('products','ProductController')
    .only(['store', 'index', 'update', 'destroy'])
    .validator(new Map([
      ['products.store', 'Product/Store']
    ]))

  Route.resource('providers', 'ProviderController')
    .only(['index', 'store', 'update', 'destroy'])
    .validator(new Map([
      ['providers.store', 'Provider/Store']
    ]))
}).middleware(['auth'])
