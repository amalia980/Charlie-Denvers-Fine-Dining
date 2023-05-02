import dbConnect from '../../../util/mongoDB';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  const { method } = req;

  //connect mongo
  await dbConnect();

    if (method === 'GET') {
        try {
            const products = await Product.find()
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json({
                message: {
                  msgBody: 'An error occured when trying to get a product: ' + error,
                  msgError: true,
                },
              })
      }
  }

  if (method === 'POST') {
    try {
      const product = await Product.create(req.body)
      res.status(201).json(product, {
        message: {
          msgBody: 'Successfully added new product',
          msgError: false,
        },
      })
    } catch (error) {
      res.status(500).json({
        message: {
          msgBody: 'An error occured when trying to add a product: ' + error,
          msgError: true,
        },
      })
    }
  }
};