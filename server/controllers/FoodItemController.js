const Food = require("../models/FoodItemModel");

const CreateFood = async (req, res) => {
  const { name, price, img, category, quantity } = req.body;

  if (name && price && img && category && quantity) {
    const exist = await Food.findOne({ name });

    if (exist !== null) {
      res
        .status(500)
        .send({ status: "failed", msg: "Food Item is already exists" });
    }

    let availability = true;

    if (quantity < 2) {
      availability = false;
    }

    try {
      const newItem = new Food({
        name,
        price,
        img,
        category,
        availability,
        quantity,
      });

      await newItem.save();
      res.status(201).send({
        status: "success",
        msg: "Item Created Successfully",
        data: newItem,
      });
    } catch (error) {
      res.status(500).send({ status: "failed", mas: "Something went wrong" });
    }
  } else {
    res.status(500).send({ status: "failed", mas: "All fields are required" });
  }
};

const GetAllFoodItems = async (req, res) => {
  const { name } = req.query;

  const queryObject = {};
  if (name !== "" && name !== null) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  try {
    const foods = await Food.find(queryObject);
    res.status(200).send({ status: "success", data: foods });
  } catch (error) {
    res.status(500).send({ status: "failed", msg: "Something went wrong" });
  }
};

const GetAdminFood = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).send({ status: "success", data: foods });
  } catch (error) {
    res.status(500).send({ status: "failed", msg: "Something went wrong" });
  }
};

const GetFood = async(req, res) => {

  const id = req.params.id

  try {
    const data = await Food.findOne({_id: id});

    if(!data){
      res.status(404).send({status: "failed", msg: "Food Item doesn't exist"});
    }
    else{
      res.status(200).send({status: "success", data: data});
    }
  } catch (error) {
    res.status(500).send({ status: "failed", msg: "Something went wrong" });
  }
}

const DeleteFood = async(req, res) => {
  const id = req.params.id;
  try {
    const foods = await Food.findByIdAndDelete({_id: id});
    res.status(200).send({status: "success", msg: "Food Item Deleted Successfully", data: foods});
  } catch (error) {
    res.status(500).send({ status: "failed", msg: "Something went wrong" });
  }
}

module.exports = {
  CreateFood,
  GetAllFoodItems,
  GetAdminFood,
  DeleteFood,
  GetFood
};
