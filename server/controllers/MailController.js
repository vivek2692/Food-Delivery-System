const Mail = require("../models/MailsModel");

const CreateMail = async(req, res) => {
    const {email} = req.body;

    if(email){
        const isExist = await Mail.findOne({email})

        if(isExist){
            res.status(500).send({status: "failed", msg: "Email ID already exists"});
        }
        else{
            try {
                const newMail = new Mail({
                    email,
                });

                await newMail.save();
                res.status(200).send({status: "success", msg: "Mail Added Successfully"});
            } catch (error) {
                res.status(500).send({status: "failed", msg: "Something went wrong"});
            }
        }
    }
    else{
        res.status(500).send({status: "failed", msg: "All feilds are required"});
    }
};

const GetAllMails = async(req, res) => {
    try {
        const data = await Mail.find();
        res.status(200).send({status: "success", data: data});
    } catch (error) {
        res.status(500).send({status: "failed", msg: "Something went wrong"});
    }
};

module.exports = {
    CreateMail,
    GetAllMails
}