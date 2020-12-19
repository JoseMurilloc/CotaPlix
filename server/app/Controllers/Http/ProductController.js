'use strict'

const Product = use('App/Models/Product')

class ProductController {

  async index ({ auth }) {
    const products = await Product.query()
      .where('user_id', auth.user.id)
      .select('id', 'description', 'price', 'unity', 'code_bar')
      .fetch()

    return products
  }

  async store ({ request, auth }) {
    const data = request.only(['description','price', 'code_bar', 'unity'])
    const user_id = auth.user.id

    console.log(data, user_id);

    const product = await Product.create({
      ...data,
      user_id
    })

    return product
  }
}

module.exports = ProductController