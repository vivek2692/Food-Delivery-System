const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const RegisterUser = async (req, res) => {
  const { name, email, password, address } = req.body;

  if (name && email && password && address) {
    const existUser = await User.findOne({ email });

    if (!existUser) {
      try {

        const totalUser = await User.find();
        const id = totalUser.length + 1;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
          id,
          name,
          password: hashedPassword,
          email,
          address,
        });
        await newUser.save();
        res
          .status(200)
          .send({ status: "success", msg: "User registered successfully"});
      } catch (error) {
        console.log(error);
        res.status(500).send({ status: "failed", msg: "Something went wrong" });
      }
    } else {
      res.status(500).send({ status: "failed", msg: "User already exists" });
    }
  } else {
    res.status(500).send({ status: "failed", msg: "All feilds are required" });
  }
};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    try {
      const existUser = await User.findOne({ email });

      if (existUser !== null) {
        const isMatch = await bcrypt.compare(password, existUser.password);

        if (isMatch) {
          const token = jwt.sign({ userID: existUser._id, isAdmin: existUser.isAdmin }, process.env.JWT_SEC, {
            expiresIn: "5d",
          });
          const { password, ...others } = existUser._doc;
          res.status(200).send({ status: "success", data: { ...others, token }});
        } else {
          res.status(500).send({ status: "failed", msg: "Wrong Credentials" });
        }
      } else {
        res.status(404).send({ status: "failed", msg: "User doesn't exist" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "failed", msg: "Something went wrong" });
    }
  } else {
    res.status(500).send({ status: "failed", msg: "All feilds are required" });
  }
};

const GetAllUsers = async(req, res) => {
  try {
    const data = await User.find();
    res.status(200).send({status: "success", data: data});
  } catch (error) {
    res.status(500).send({ status: "failed", msg: "Something went wrong" });
  }
}

const GetUser = async(req, res) => {

  const id = req.params.id

  try {
    const data = await User.findOne({_id: id});

    if(!data){
      res.status(404).send({status: "failed", msg: "User doesn't exist"});
    }
    else{
      res.status(200).send({status: "success", data: data});
    }
  } catch (error) {
    res.status(500).send({ status: "failed", msg: "Something went wrong" });
  }
}

const DeleteUser = async(req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete({_id: id});
    res.status(200).send({status: "success", msg: "User Deleted Successfully", data: user});
  } catch (error) {
    res.status(500).send({ status: "failed", msg: "Something went wrong" });
  }
}

module.exports = {
  RegisterUser,
  LoginUser,
  GetAllUsers,
  DeleteUser,
  GetUser
};
