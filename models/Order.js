const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    customer: {
      type: String,
        required: true,
        maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    totalPrice:{
        type: Number,
        required: true,
    },
    status:{
      type: Number,
      default: 0,
    },
    paymentMethod:{
        type: Number,
        required: true,
      },
  }, { timeStamps: true }
);
  
module.exports = mongoose.model.Order || mongoose.model("Order", OrderSchema);