const DeliveryBoy = require("../models/DeliveryBoyModel");

const CreateDeliveryBoy = async(req, res) => {
    const {id, name, email, contact} = req.body;

    if(id && name && email && contact){
        const isExist = await DeliveryBoy.findOne({email})

        if(isExist){
            res.status(500).send({status: "failed", msg: "Email ID already exists"});
        }
        else{
            try {
                const newBoy = new DeliveryBoy({
                    id,
                    name,
                    email,
                    contact
                });

                await newBoy.save();
                res.status(200).send({status: "success", msg: "Delivery Boy Added Successfully"});
            } catch (error) {
                res.status(500).send({status: "failed", msg: "Something went wrong"});
            }
        }
    }
    else{
        res.status(500).send({status: "failed", msg: "All feilds are required"});
    }
};

const GetAll = async(req, res) => {
    try {
        const data = await DeliveryBoy.find();
        res.status(200).send({status: "success", data: data});
    } catch (error) {
        res.status(500).send({status: "failed", msg: "Something went wrong"});
    }
}

const GetOne = async(req, res) => {
    const id = req.params.id

    try {
        const data = await DeliveryBoy.findOne({_id: id});
        res.status(200).send({status: "success", data: data});
    } catch (error) {
        res.status(500).send({status: "failed", msg: "Something went wrong"});
    }
};

module.exports = {
    CreateDeliveryBoy,
    GetAll,
    GetOne
}