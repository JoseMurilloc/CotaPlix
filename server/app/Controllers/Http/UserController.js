'use strict'

const User = use('App/Models/User')

class UserController {

  async show({ auth }) {
    const { name, email, id } = auth.user

    return { name, email, id }
  }

  async store({ request }) {
    const data = request.only(['email', 'password', 'name'])

    const user = await User.create(data)


    /**
     * View data user =
     */
    delete user.$attributes.password
    delete user.$attributes.created_at
    delete user.$attributes.updated_at

    console.log(user);

    return user
  }
}

module.exports = UserController
