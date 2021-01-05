'use strict'

const User = use('App/Models/User')
const Mail = use('Mail')
const crypto = require('crypto')

class ForgotPasswordController {
  async store({ request, response }) {
    const email = request.input('email')

    const user = await User.findBy('email', email)

    if(!user) {
      return response.status(400).json({
        message: 'User not found with email send on request'
      })
    }

    user.token = crypto.randomBytes(10).toString('hex')
    user.token_created_at = new Date()

    await user.save()

    /**
     * SendMail: Envio de email
     */
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

    return response.status(204).json()
  }
}

module.exports = ForgotPasswordController
