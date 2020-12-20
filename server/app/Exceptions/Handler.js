'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')
const Youch = use('youch')
class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { request, response }) {
    if (error.name === 'ValidationException') {
     return response.status(error.status).json(error.messages)
    }
    if (Env.get('NODE_ENV') === 'development') {
      const youch = new Youch(error, resquest.request)
      const errorJSON = await youch.toJSON()

      return response.status(error.status).json(errorJSON)


    }
    return response.status(error.status)
  }
  async report (error, { request }) {
    console.log(error)
  }
}

module.exports = ExceptionHandler
