import dbConnect from '../../../util/mongoDB'
import Product from '../../../models/Product'

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req

  //connect mongo
  dbConnect()

  if (method === 'GET') {
    try {
      const findProduct = await Product.findById(id)
      res.status(200).json(findProduct)
    } catch (error) {
      res.status(500).json({
        message: {
          msgBody: 'An error occured when trying to get a product: ' + error,
          msgError: true,
        },
      })
    }
  }

  if (method === 'PUT') {
    try {
      const product = await Product.updateOne(req.body)
      res.status(201).json(product, {
        message: {
          msgBody: 'Successfully updated product',
          msgError: false,
        },
      })
    } catch (error) {
      res.status(500).json({
        message: {
          msgBody: 'An error occured when trying to update a product: ' + error,
          msgError: true,
        },
      })
    }
  }

  if (method === 'DELETE') {
    try {
      const product = await Product.deleteOne(req.body)
      res.status(201).json(product, {
        message: {
          msgBody: 'Successfully deleted a product',
          msgError: false,
        },
      })
    } catch (error) {
      res.status(500).json({
        message: {
          msgBody: 'An error occured when trying to delete a product: ' + error,
          msgError: true,
        },
      })
    }
  }
}
