const express = require('express');
require("./db/conn");
const app = express()
const port = process.env.PORT || 5000 ;
const userRouter = require('./route/users');
const multer = require("multer");
const imageModal = require('./modals/images');
app.use(express.json());
app.use("/images",express.static('images'))
let storage = multer.diskStorage({
  destination:  (req, file, cb)=> {
    cb(null, './images')
  },
  filename:  (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const upload = multer({
  storage:storage,
  limits:{
    fileSize:1000000
  },
  fileFilter(req,file,cb){
    console.log("file",file.originalname);
    if(!file.originalname.match(/\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i)){
        cb(new Error('Please upload image'))
    }
    cb(undefined,true)

  }
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/upload',upload.single('image'),async(req,res)=>{
  const data = new imageModal({image:`http://localhost:5000/${req.file.path}`});
  const dataAdded = await data.save();
  console.log("reqqqqqqqqqqqqqqqqqqqqqqqqqq",req.file);
  res.send(dataAdded.image)
},(error,req,res,next)=>{
  res.status(404).send({error:error.message})
})
app.use("/users",userRouter);

app.listen(port, () => {
  console.log(` App listening at http://localhost:${port}`)
})