const stdmodel = require('../model/student.model');

async function getstudents(req , res){
    const std =await stdmodel.find({});
    if(!std){
            res.status(404).json({message:"Student data is not available"});
    }else{
            res.status(200).json(std);
    }
}
async function getStdById(req , res){
        const {id} = req.params;
        const std = await stdmodel.findById(id);
        if(!std){
            res.status(404).json({message:`Student:${id} doesnot exist in the record`});
        }else{
            res.status(200).json(std);
        }
    
}
async function poststd(req , res){
        try {
            const {id , name , phn , email} = req.body;
            const std  =await stdmodel.create({
                _id:id,
                name:name,
                phn:phn,
                email:email
            })
            res.status(200).json(std)
        } catch (error) {
            console.log(error)
            res.status(404).json({message:"Data cannot be inserted"})
        }
}
async function updatestd(req , res){
        const {id} = req.params;
        const {name , phn , email} = req.body;
        const std = await stdmodel.findByIdAndUpdate(id ,{
            name:name,
            phn:phn,
            email:email
        });
        if(!std){
            res.status(404).json({message:`Student:${id} doesnot exist in the record`});
        }else{
            res.status(200).json({message:`student:${id} updated successfully`});
        }
}
async function deletestd(req , res){
        const {id} = req.params;
        const std = await stdmodel.findByIdAndDelete(id , req.body);
        if(!std){
            res.status(404).json({message:`Student:${id} doesnot exist in the record`});
        }else{
            res.status(200).json({message:`Student:${id} deleted from the record`});
        }
}
module.exports = {getstudents , deletestd , getStdById , updatestd , poststd};