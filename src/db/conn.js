const express = require("express");
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/NodeMongoApi', {useNewUrlParser: true , useUnifiedTopology: true ,useFindAndModify: false})
.then(()=>console.log("Database is connected"))
.catch((e)=>console.log("Database is not connected"));
