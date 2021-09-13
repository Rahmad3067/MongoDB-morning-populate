const express = require("express");
const dotenv = require('dotenv');
const Address = require('./models/Address')
const Student = require("./models/Student")
dotenv.config({
    path: "./config.env"
});
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect(process.env.DB, {
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("Connected to MongoDB !");
	});

app.post("/address", async ( req, res ) => {
    await Address.create(req.body);
    console.log("hellooo")
    res.json({
        message : "Address created"
    });
});

app.post("/student", async ( req, res ) => {
    await Student.create( req.body );
    res.json({
        message: "Student Created"
    });
});

app.get("/address", async (req, res) => {
    const address = await Address.find();
    res.json({
        message : "List of Adresses",
        data: address
    })
})


app.get("/student/:id", async ( req,res ) => {
    const address = await Student.findById(req.params.id).populate('address');
    res.json({
        message: "The only Student",
        data: address,
    })
})




app.listen(process.env.PORT, () => {
	console.log("Listening on port 5000");
});

