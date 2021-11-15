const { Schema, model } = require("mongoose");

const saleSchema = Schema(
  {
    employee: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    customer: {
      type: String,
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: Number,
      },
    ],
    total: {
      type: Number,
      default: 0,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Sale", saleSchema, "Sales");
