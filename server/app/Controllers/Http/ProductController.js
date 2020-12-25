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

    const product = await Product.create({
      ...data,
      user_id
    })

    return product
  }

  async update({ request, params }) {
    const product = await Product.findOrFail(params.id)

    const data = request.only([
      'description',
      'price',
      'code_bar',
      'unity'
    ])

    product.merge(data)

    await product.save()

    return product
  }

  async destroy({ params, response }) {
    const { id } = params
    const product = await Product.find(id)

    if (!product) {
      return response.status(400).json({ error: 'Product not exists please try again'})
    }

    await product.delete()
  }
}

module.exports = ProductController
