const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const { Holding } = require("./Models/HoldingsModel");
const { Position } = require("./Models/PositionModel");
const { Order } = require("./Models/OrderModel");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

require('dotenv').config()

const app = express();

mongoose.connect(process.env.ATLASDB_URL)
    .then(() => console.log('DB Connected!'));

const corsOptions = {
    origin: ['https://easy-stock-frontend.onrender.com', 'http://localhost:5173', 'http://localhost:5174'], // Frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); //The json() method specifically parses incoming requests where the Content-Type is application/json. It converts the raw JSON data from the request body into a JavaScript object.
app.use(cookieParser());
app.use(express.json());


app.use("/", authRoute);


app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
});