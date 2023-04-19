const Staff = require("../models/StaffModel");

const CreateStaff = async(req, res) => {
    const {id, name, email, contact, address, role} = req.body;

    if(id && name && email && contact && address && role){
        const isExist = await Staff.findOne({email})

        if(isExist){
            res.status(500).send({status: "failed", msg: "Email ID already exists"});
        }
        else{
            try {
                const newStaff = new Staff({
                    id,
                    name,
                    email,
                    contact,
                    address,
                    role
                });

                await newStaff.save();
                res.status(200).send({status: "success", msg: "New Staff Added Successfully"});
            } catch (error) {
                res.status(500).send({status: "failed", msg: "Something went wrong"});
            }
        }
    }
    else{
        res.status(500).send({status: "failed", msg: "All feilds are required"});
    }
};

const GetAllStaff = async(req, res) => {
    try {
        const data = await Staff.find();
        res.status(200).send({status: "success", data: data});
    } catch (error) {
        res.status(500).send({status: "failed", msg: "Something went wrong"});
    }
}

const GetOneStaff = async(req, res) => {
    const id = req.params.id

    try {
        const data = await Staff.findOne({_id: id});
        res.status(200).send({status: "success", data: data});
    } catch (error) {
        res.status(500).send({status: "failed", msg: "Something went wrong"});
    }
};

module.exports = {
    CreateStaff,
    GetAllStaff,
    GetOneStaff
}