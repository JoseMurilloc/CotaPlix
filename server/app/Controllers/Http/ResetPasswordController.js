const moment = require('moment')
const User = use('App/Models/User')

class ResetPasswordController {
  async store({ request, response }) {
    const { token, password } = request.all()
    const user = await User.findBy('token', token)

    if (!user) {
      return response.status(400).json({
        error: "Token inválido"
      })
    }

    const tokenExpired = moment()
        .subtract('2', 'days')
        .isAfter(user.token_created_at)

    if (tokenExpired) {
      return response.status(400).json({ error: 'O token está expirado'})
    }

    user.token = null
    user.token_created_at = null
    user.password = password

    await user.save()

  }
}

module.exports = ResetPasswordController
