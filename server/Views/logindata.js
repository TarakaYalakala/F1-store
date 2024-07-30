const express = require("express");
const router = express.Router();
const CoustmerSchema = require("../Model/CoustmerSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const formidable = require("formidable");
const fs = require("fs");
const ProductsSchema = require("../Model/ProductsSchema");
const {LoginData,SigninData,ProductList,TokenMiddleWare,getAllProducts} = require("../Controllers/LoginController");
const {ObjectId} = require("mongodb");


router.get("/", async(req,res) => {
     res.json({
        Message: "Welcome to home router"
     })
});


router.post("/signin", SigninData);

router.post("/login",LoginData);

router.post("/addProducts",TokenMiddleWare,ProductList);

router.get("/getProducts",getAllProducts);

router.post("/product/:brand", async (req,res) => {
    const brand = req.params.brand;
    const product = await ProductsSchema.find({Brand: brand});
    res.json( 
      { 
         Message: "Product List",
          Data: product
         } 
      );
})

router.get("/product/:brand/:id", async(req,res) => {
    const {id} = req.params;
    const product = await ProductsSchema.find({_id: id})
    return res.json({
      product
    })
}) 


module.exports = router