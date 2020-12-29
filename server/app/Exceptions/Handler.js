'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')
const Youch = use('youch')
const Env = use('Env')

const AppError = require('../Exceptions/AppError')

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { request, response }) {
    if (error.name === 'ValidationException') {
     return response.status(error.status).json(error.messages)
    }

    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message
      })
    }

    if (Env.get('NODE_ENV') === 'development') {
      const youch = new Youch(error, request.request)
      const errorJSON = await youch.toJSON()

      return response.status(error.status).json(errorJSON)


    }
    return response.status(error.status)
  }
  async report (error, { request }) {
    // console.log(error)
  }
}

module.exports = ExceptionHandler
