const express = require("express");
const multer = require("multer");
const uploadFile = require('./services/storage.service');
const postModel = require("./models/post.model");

const app=express();
app.use(express.json()); //middleware to read the data from the request body and convert it into json format

const upload=multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res)=>{
    const data = req.body;
    const file = req.file; //shows the file which is upload by user in buffer format
    // console.log(data);
    // console.log(file);

    const result = await uploadFile(req.file.buffer) //uploadFile is a function which is used to upload the file to the imagekit and it returns the url of the uploaded file

    const post = await postModel.create({
        image: result.url,
        caption: data.caption
    })

    res.status(201).json({
        message: "post created successfully"
    })
    
})

app.get("/get-posts", async (req, res)=>{

    const posts = await postModel.find();

    res.status(200).json({
        message: "posts fetched succesfully",
        posts: posts
    })
})



module.exports = app;