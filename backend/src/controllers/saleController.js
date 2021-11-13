const salecont={};
const Sale=require('../models/saleModel.js');


salecont.saveSale=async(req,res)=>{  
    try{
        const {employee,customer,products,total,date}=req.body;
        const sale=new Sale({
            employee,
            customer,
            products,
            total,
            date
        });   
        await sale.save();
        res.status(200).json({message:'Sale saved'});
    }catch(e){  
        console.log(e);
        res.status(500).json({message:'Error saving sale'});
    }
}