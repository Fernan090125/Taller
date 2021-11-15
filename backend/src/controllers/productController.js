const productCont = {};
const Product = require("../models/productModel");
const AWS = require("aws-sdk");
const spacesEndpoint = new AWS.Endpoint("sfo3.digitaloceanspaces.com");
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
});

productCont.saveProduct = async (req, res) => {
  try {
    const { name, price, category, description, stock, model } = req.body;
    const { image } = req.files;

    const upload = await s3
      .putObject({
        ACL: "public-read",
        Bucket: "ani",
        Body: image.data,
        Key: image.name,
      })
      .promise();

    const urlImage = `https://ani.sfo3.digitaloceanspaces.com/${image.name}`;
    const newProduct = new Product({
      name,
      price,
      category,
      description,
      stock,
      model,
      image: urlImage,
    });

    await newProduct.save();
    return res.json({
      message: "Producto guardado correctamente",
    });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error al guardar el producto" });
  }
};

productCont.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error al obtener los productos" });
  }
};

productCont.getProduct = async (req, res) => {
  try {
    const { id } = req.params.id;
    const product = await Product.findById(id);
    return res.json(product);
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error al obtener el producto" });
  }
};

productCont.updateProduct = async (req, res) => {
  try {
    const { id } = req.params.id;
    const { name, price, category, description, stock, model } = req.body;

    const product = await Product.findByIdAndUpdate(id, {
      name,
      price,
      category,
      description,
      stock,
      model,
      image,
    });
    return res.json({
      message: "Producto actualizado correctamente",
    });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error al actualizar el producto" });
  }
};

productCont.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params.id;
    await Product.findByIdAndDelete(id);
    return res.json({
      message: "Producto eliminado correctamente",
    });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error al eliminar el producto" });
  }
};

module.exports = productCont;
