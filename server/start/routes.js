'use strict'

const Route = use('Route')


Route.post('/users', 'UserController.store').validator('User')
Route.get('/user', 'UserController.show').middleware(['auth'])

Route.post('/auth', 'AuthController.store')

Route.post('/forgot_pasword', 'ForgotPasswordController.store')
Route.put('/forgot_pasword_update', 'ForgotPasswordController.update')


Route.post('/products', 'ProductController.store').middleware(['auth'])

Route.get('/products','ProductController.index').middleware(['auth'])

Route.put('/products/:id','ProductController.update').middleware(['auth'])
