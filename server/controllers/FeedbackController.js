const Feedback = require("../models/FeedbackModel");

const CreateFeedback = async(req, res) => {
    const {name, email, msg} = req.body;

    if(name && email && msg){
        try {
            const feedback = new Feedback({
                name,
                email,
                msg
            });

            await feedback.save();
            res.status(200).send({status: "success", msg: "Feedback Added Successfully"});
        } catch (error) {
            res.status(500).send({status: "failed", msg: "Something went wrong"});
        }
    }
    else{
        res.status(500).send({status: "failed", msg: "All feilds are required"});
    }
};

const GetAllFeedback = async(req, res) => {
    try {
        const feedback = await Feedback.find().sort({ createdAt: -1 });
        res.status(200).send({status: "success", data: feedback});
    } catch (error) {
        res.status(500).send({status: "failed", msg: "Something went wrong"});
    }
}

module.exports = {
    CreateFeedback,
    GetAllFeedback
}