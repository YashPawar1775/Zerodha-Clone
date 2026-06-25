require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UsersModel } = require("./model/UsersModel");

const auth = require("./middleware/auth");

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
    origin: [
        "http://localhost:3000",
        "http://localhost:3001"
    ],
    credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    await newOrder.save();
    let holding = await HoldingsModel.findOne({
        name: req.body.name,
    });
    if (req.body.mode === "BUY") {
        if (holding) {
            const totalQty=holding.qty+Number(req.body.qty);
            const avgPrice =(holding.qty*holding.avg+Number(req.body.qty)*Number(req.body.price)) / totalQty;
            holding.qty = totalQty;
            holding.avg = avgPrice;
            await holding.save();
        } else {
            let newHolding = new HoldingsModel({
                name: req.body.name,
                qty: req.body.qty,
                avg: req.body.price,
                price: req.body.price,
                net: "0%",
                day: "0%",
            });
            await newHolding.save();
        }
    }

    if (req.body.mode === "SELL" && holding) {
        holding.qty =holding.qty - Number(req.body.qty);
        if (holding.qty <= 0) {
            await HoldingsModel.findByIdAndDelete(
                holding._id
            );
        } else {
            await holding.save();
        }
    }
    res.send("Order saved!");
});

app.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser =await UsersModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new UsersModel({
            username,
            email,
            password: hashedPassword
        });
        await user.save();
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        });
        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UsersModel.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Invalid Email"
            });
        }
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Password"
            });
        }
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        });
        res.status(200).json({
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

app.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.status(200).json({
        message: "Logged out successfully"
    });
});

app.get("/profile", auth, async (req, res) => {
    try {
        const user = await UsersModel.findOne({
            email: req.user.email
        }).select("-password");

        res.status(200).json({
            username: user.username,
            email: user.email
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`App started at ${PORT}`);
    mongoose.connect(uri);
    console.log("DB Connected Successfully");
});