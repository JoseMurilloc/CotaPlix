'use strict'

class AuthController {
  async store({ request, auth }) {
    const data = request.only(['email', 'password'])

    const { token } = await auth.attempt(data.email, data.password)

    return {token}
  }
}

module.exports = AuthController
