'use strict'

const User = use('App/Models/User')
const Mail = use('Mail')
const crypto = require('crypto')
const moment = require('moment')

class ForgotPasswordController {
  async store({ request, response }) {
    const email = request.input('email')

    const user = await User.findBy('email', email)
    if(user) {
      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      await Mail.send(
        ['emails.password_forgot'],
        {
          email,
          token: user.token,
          link: `http://localhost:3000/recoverPasswordUpdate?token=${user.token}`
        },
        message => {
          message
            .to(user.email)
            .from('jooseemurillo@gmail.com', 'Jose Murillo')
            .subject('Recuperação de senha')

        }
      )
    } else {
      return response.status(400).json({
        error: 'Email is not found, please try again'
      })
    }
  }


  async update({ request, response }) {
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

module.exports = ForgotPasswordController
