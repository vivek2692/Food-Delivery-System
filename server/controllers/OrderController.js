const Order = require("../models/OrderModel");
const Payment = require("../models/PaymentModel");
const Sales = require("../models/SalesModel");
const Food = require("../models/FoodItemModel");

const CreateOrder = async (req, res) => {
  const { name, email, address, items, total_amount } = req.body;

  if (address && name && email && items && total_amount) {
    try {
      const total_orders = await Order.find();
      const newOrder = new Order({
        id: total_orders.length + 1,
        name,
        email,
        address,
        items,
        total_amount,
      });

      //   console.log(newOrder);
      await newOrder.save();
      //   console.log("completed order");

      items.map(async (item) => {
        const food = await Food.findOne({ name: item.item_name });

        const isExist = await Sales.findOne({ name: food.name });

        try {
          if (isExist) {
            isExist.sales = isExist.sales + item.item_quantity;
            await isExist.save();
          } else {
            const newSale = new Sales({
              name: food.name,
              category: food.category,
              img: food.img,
              price: food.price,
              sales: item.item_quantity,
            });
            await newSale.save();
          }
        } catch (error) {
          res
            .status(500)
            .send({ status: "failed", msg: "Something went wrong" });
        }
      });

      const total_payments = await Payment.find();

      const newPayment = new Payment({
        id: total_payments.length + 1,
        name,
        email,
        amount: total_amount,
        order_id: newOrder._id,
      });

      await newPayment.save();
      res
        .status(200)
        .send({
          status: "success",
          msg: "Order Added Successfully",
          data: newOrder,
        });
    } catch (error) {
      res.status(500).send({ status: "failed", msg: "Something went wrong" });
    }
  } else {
    res.status(500).send({ status: "failed", msg: "All feilds are required" });
  }
};

const GetAllOrders = async (req, res) => {
  try {
    const data = await Order.find();
    res.status(200).send({ status: "success", data: data });
  } catch (error) {
    res.status(500).send({ status: "failed", msg: "Something went wrong" });
  }
};

const DeleteOrder = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Order.findByIdAndDelete({ _id: id });
    const pdata = await Payment.deleteOne({ order_id: id });
    res.status(200).send({ status: "success", data: data });
  } catch (error) {
    res.status(500).send({ status: "failed", msg: "Something went wrong" });
  }
};

const CompletePayment = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Order.findByIdAndUpdate(
      { _id: id },
      { payment: "Completed" },
      { new: true }
    );
    const pdata = await Payment.findOneAndUpdate(
      { order_id: id },
      { status: "Completed" },
      { new: true }
    );
    res.status(200).send({ status: "success", data: data });
  } catch (error) {
    res.status(500).send({ status: "failed", msg: "Something went wrong" });
  }
};

const GetAllPayments = async(req, res) => {
  try {
    const pdata = await Payment.find();
    res.status(200).send({ status: "success", data: pdata });
  } catch (error) {
    res.status(500).send({ status: "failed", msg: "Something went wrong" });
  }
}

const GetAllSales = async(req, res) => {
  try {
    const pdata = await Sales.find();
    res.status(200).send({ status: "success", data: pdata });
  } catch (error) {
    res.status(500).send({ status: "failed", msg: "Something went wrong" });
  }
}

module.exports = {
  CreateOrder,
  GetAllOrders,
  DeleteOrder,
  CompletePayment,
  GetAllPayments,
  GetAllSales
};
