import dbConnect from "../../../util/mongoDB";
import Order from "../../../models/Order";

const handler = async (req, res) => {
    const { method } = req;
    
    await dbConnect();

    if (method === "GET") {
        try {
            const orders = await Order.find();
            res.status(200).json(orders, {
                message: {
                    msgBody: "Successfully retrieved orders",
                    msgError: false,
                }
            });
        } catch (err) {
            res.status(500).json(err, {
                message: {
                    msgBody: "An error occured when trying to retrieve orders",
                    msgError: true,
                }
                });
        }
    }
    if (method === "POST") {
        try {
            const order = await Order.create(req.body);
            res.status(201).json(order, {
                message: {
                    msgBody: "Successfully created new order",
                    msgError: false,
                }
            });
        } catch (err) {
            res.status(500).json(err, {
                message: {
                    msgBody: "An error occured when trying to create a new order",
                    msgError: true,
                }
            });
        }
    }
};

export default handler;
