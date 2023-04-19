const Category = require("../models/CategoryModel");

const CreateCategory = async (req, res) => {
  const { name, img } = req.body;

  if (name && img) {
    try {
      const isExist = await Category.findOne({ name });

      if (isExist !== null) {
        res
          .status(200)
          .send({ status: "failed", msg: "Category Already Exists" });
      }
      else{
        const newCat = new Category({
            name,
            img
          })
    
          await newCat.save();
          res.status(201).send({
            status: "success",
            msg: "Category Created Successfully",
            data: newCat,
          });
      }
    } catch (err) {
      res.status(500).send({ status: "failed", msg: "Something went wrong" });
    }
} else {
    res.status(500).send({ status: "failed", msg: "All fields are required" });
  }
};

const GetAllCat = async(req, res) => {
    try {
        const cats = await Category.find();
        res.status(200).send({status: "success", data: cats});
    } catch (error) {
        res.status(500).send({ status: "failed", msg: "Something went wrong" });
    }
}

module.exports = {
  CreateCategory,
  GetAllCat,
};
