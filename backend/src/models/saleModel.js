const { Schema, model } = require("mongoose");

const saleSchema = Schema(
  {
    id: {
      type: Number,
      autoIncrement: true,
      autogenerated: true,
    },
    employee: {
      type: String,
    },
    infocliente: {
      customer: {
        type: String,
        required: true,
      },
      customerId: {
        type: String,
        required: true,
      },
      adress: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    products: [
      {
        product: {
          type: String,
        },
        quantity: Number,
        precioUnitario: Number,
        precioTotal: Number,
      },
    ],
    total: {
      type: Number,
      default: 0,
    },
    date: {
      type: String,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Sale", saleSchema, "Sales");
