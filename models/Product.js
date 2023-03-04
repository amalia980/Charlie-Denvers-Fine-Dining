const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
  {
    category: {
      type: String,
      // required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: [Number],
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    type: {
      type: [String || Number],
    },
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  { timeStamps: true },
)

module.exports = mongoose.model('Product', ProductSchema)

//export default mongoose.model('Product', ProductSchema)

//export default mongoose.model.Product || mongoose.model.apply("Product", ProductSchema);
//module.exports = mongoose.model.Product || mongoose.model("Product", ProductSchema);
