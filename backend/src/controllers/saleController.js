const salecont = {};
const Sale = require("../models/saleModel.js");
const Product = require("../models/productModel");

salecont.saveSale = async (req, res) => {
  try {
    const { employee, infocliente, products, total, date } = req.body;
    const id = await Sale.find()
    console.log(id.length)
    const sale = new Sale({
      id: id.length + 1,
      employee,
      infocliente,
      products,
      total,
      date,
    });
    for (let i = 0; i < products.length; i++) {
      //console.log(products[i])
      const product = await Product.findOne({name: products[i].product});
      product.stock = product.stock - products[i].quantity;
      if(product.stock < 0){
        res.status(500).json({ message: "Error saving sale" });
      }
      await product.save();
    }
    await sale.save();
    res.status(200).json({ message: "Sale saved" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error saving sale" });
  }
};

salecont.getSales = async (req, res) => {
  try {
    const sales = await Sale.find();
    res.status(200).json(sales);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error getting sales" });
  }
};

salecont.getSale = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params)
    const sale = await Sale.findById(id);
    res.json({sale});
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error getting sale" });
  }
};

salecont.updateSale = async (req, res) => {
  try {
    const { id } = req.params.id;
    const { employee, customer, products, total, date } = req.body;
    const sale = await Sale.findByIdAndUpdate(id, {
      employee,
      customer,
      products,
      total,
      date,
    });
    res.status(200).json({ message: "Sale updated" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error updating sale" });
  }
};

salecont.deleteSale = async (req, res) => {
  try {
    const { id } = req.params.id;
    await Sale.findByIdAndDelete(id);
    res.status(200).json({ message: "Sale deleted" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error deleting sale" });
  }
};

module.exports = salecont;
