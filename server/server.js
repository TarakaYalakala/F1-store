const express = require("express");
const port = 8000;
const app = express();
const LoginRouter = require("./Views/logindata");
const mongoose = require("mongoose");
const cors = require("cors");



console.log(mongoose.connect("mongodb://127.0.0.1:27017/")
.then(() => console.log("Connected to DB")).catch((err) => console.log(err)));

// mongodb://localhost:27017
//  mongodb://127.0.0.1:27017/

app.use(express.json());
app.use(cors());
app.use(LoginRouter);


app.listen(port, () => {
    console.log(`Server is porting on http://localhost:${port}`);
});

