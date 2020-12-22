'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


Route.post('/users', 'UserController.store').validator('User')
Route.get('/user', 'UserController.show').middleware(['auth'])

Route.post('/auth', 'AuthController.store')


Route.post(
  '/products',
  'ProductController.store'
).middleware(['auth'])

Route.get(
  '/products',
  'ProductController.index'
).middleware(['auth'])

Route.put(
  '/products/:id',
  'ProductController.update'
).middleware(['auth'])
