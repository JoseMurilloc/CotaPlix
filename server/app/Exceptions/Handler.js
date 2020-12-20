'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { request, response }) {
    if (error.name === 'ValidationException') {
     return response.status(error.status).json(error.messages)
    }

    return response.status(error.status)
  }
  async report (error, { request }) {
    console.log(error)
  }
}

module.exports = ExceptionHandler
