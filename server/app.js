const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');

const connectDB = require("./config/connectDB.js");
const AuthRoute = require("./routes/authRoute");
const UserRoute = require("./routes/userRoute");
const FoodRoute = require("./routes/foodItemRoute");
const CategoryRoute = require("./routes/categoryRoute");
const DeliveryBoyRoute = require("./routes/deliveryBoyRoute");
const FeedbackRoute = require("./routes/feedbackRoute");
const MailRoute = require("./routes/mailsRoute.js");
const OrderRoute = require("./routes/orderRoute.js");
const StaffRoute = require("./routes/staffRoute.js");

dotenv.config();

const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL;

connectDB(DATABASE_URL);

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/auth", AuthRoute);
app.use("/api/users", UserRoute)
app.use("/api/food", FoodRoute);
app.use("/api/category", CategoryRoute);
app.use("/api/delivery-boy", DeliveryBoyRoute);
app.use("/api/feedback", FeedbackRoute);
app.use("/api/mail", MailRoute);
app.use("/api/order", OrderRoute);
app.use("/api/staff", StaffRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
})
