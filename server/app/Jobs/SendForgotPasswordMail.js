'use strict'

const Mail = use('Mail')

class SendForgotPasswordMail {
  static get concurrency () {
    return 3
  }

  static get key () {
    return 'SendForgotPasswordMail-job'
  }

  async handle ({email, user}) {

    console.log(`Job: ${SendForgotPasswordMail.key}`)

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
  }
}

module.exports = SendForgotPasswordMail

