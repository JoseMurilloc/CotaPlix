'use strict'

class AuthController {
  async store({ request, response, auth }) {
    try {
      const data = request.only(['email', 'password'])

      const { token } = await auth.attempt(data.email, data.password)

      return {token}
    } catch(error) {
      return response.status(error.status).json({
        "error": error.message
      })
    }
  }
}

module.exports = AuthController
