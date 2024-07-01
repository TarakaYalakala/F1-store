const jwt = require("jsonwebtoken");
const formidable = require("formidable");
const CoustmerSchema = require("../Model/CoustmerSchema");
const bcrypt = require("bcrypt");
const ProductsSchema = require("../Model/ProductsSchema");
const fs = require("fs");



const LoginData =  async (req,res) => {
    const {Email,Password} = req.body;
    if (!Email || !Password) {
       return res.status(400).json({
          Error : "Enter Above fields Properly"
       })
    }
    const user = await CoustmerSchema.findOne({Email: Email});
    if (user) {
       const passcheck = bcrypt.compareSync(Password, user.Password);
       if (passcheck) {
 
          const token = jwt.sign({ id:user._id, Email: user.Email, Name: user.Name }, "hasher.io");
          console.log(token);
 
           return res.status(200).json({
              Message: "Login completed successfully",
              id:user._id,
               Email: user.Email,
                Name: user.Name,
                IsAdmin:user.IsAdmin,
                token
           })
       }
       
    } else {
        return res.status(404).json({
          Error: "Enter valid Email"
        });
    }
 }


const SigninData = async(req,res) => {
    const {Name,Email,Password,IsAdmin} = req.body;
   
    if (!Name  || !Email || !Password || IsAdmin === undefined || IsAdmin === null) {
         return res.status(400).json({
            Error: "Enter Above fields"
         })
    }
    const user = await CoustmerSchema.findOne({Email: Email});
    if (user) {
        return res.status(401).json({
         Error: "User already exist with this email"
        })
    }
    else {
      const Newpass = bcrypt.hashSync(Password,7);
      const coustmer = await new CoustmerSchema(req.body);
      coustmer.Password = Newpass;
      coustmer.save();
          return res.status(200).json({
            Message: "Signin completed successfully",
            coustmer
         })
      
    }
}


const ProductList = async(req,res) => {

    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, async(err,fields,file) => {
       const obj = {
         Title: fields.Title[0],
         Brand: fields.Brand[0],
         Description: fields.Description[0],
         Price: Number(fields.Price[0]),
         Rating: Number(fields.Rating[0])
       }

       const productUpdate = await ProductsSchema(obj);

       const buffer = fs.readFileSync(file.Photo[0].filepath);
       productUpdate.Photo.data = buffer;
       productUpdate.Photo.contentType = file.Photo[0].mimetype;
       productUpdate.save();
       res.json({
         Message: "Uploadeed successfully"
       })
    })

    
}


const getAllProducts =  async (req,res) => {
   const products = await ProductsSchema.find();
   return res.json({
      Message: "All Products",
      products
   })
}


        //  Middlewares   //

        const TokenMiddleWare =  (req,res,next) => {
            const token = req.headers.authorization;
            if (!token) {
               res.json("Error in token")
            }
            try {
               const verfication = jwt.verify(token, "hasher.io");
               next();
            } catch (err) {
               console.log(err);
            }
         }
        


 module.exports = {
    LoginData,
    SigninData,
    ProductList,
    TokenMiddleWare,
    getAllProducts
 }