const productCont = {};
const Product = require('../models/productModel');

productCont.saveProduct = async (req, res) => {
    try{
        const{name,price,category,description,stock,model}=req.body;
        const {image}=req.files;
        const newProduct = new Product({
            name,
            price,
            category,
            description,
            stock,
            model
        });
        await newProduct.save();
        return res.json({
            message: 'Producto guardado correctamente'
        })
    }catch(err){
        console.log(err);
        return res.json({ message: 'Error al guardar el producto' });
    }
}