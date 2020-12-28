'use strict'

const Route = use('Route')


Route.post('/users', 'UserController.store')
  .validator('User/Store')
Route.get('/user', 'UserController.show').middleware(['auth'])

Route.post('/auth', 'AuthController.store')

Route.post('/forgot_pasword', 'ForgotPasswordController.store')
Route.put('/forgot_pasword', 'ForgotPasswordController.update')



Route.group(() => {
  Route.post('/addresses', 'AddressController.store')

  Route.resource('products','ProductController')
    .only(['store', 'index', 'update', 'destroy'])
    .validator(new Map([
      ['products.store', 'Product/Store']
    ]))

  Route.get('/providers', 'ProviderController.index')
  Route.post('/providers', 'ProviderController.store')
  Route.delete('/providers/:id', 'ProviderController.destroy')
}).middleware(['auth'])
