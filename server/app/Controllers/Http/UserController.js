'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request, response }) {
    const data = request.all()


    const existEmail = await User.query()
      .where('email', data.email)
      .fetch()

    if(existEmail) {
      return response.status(400)
        .json({ error: 'Esse email já esta sendo usado, porfavor tente com outro' })
    }

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
