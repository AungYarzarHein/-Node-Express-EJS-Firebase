import express from "express";
import "dotenv/config";
import { defaultFeatureImage, getCollectionData, getLastPost, getPost } from "./utils/getData.js";





const app = express();

app.use(express.static("public"));
app.set("view engine","ejs") ;



app.get("/",async (req,res) => {
    const collectionData = await getLastPost("details");
    res.render("index",{header:collectionData[0].postHeader,data:collectionData[0]})

})


app.get("/posts",async(req,res) => {
    const collectionData = await getCollectionData("header",5);
    res.render("posts",{header:{title:"Posts",featureImage:defaultFeatureImage},data:collectionData}) ;
})

app.get("/contact",async(req,res) => {
    res.render("contact",{header:{title:"contact",featureImage:defaultFeatureImage}})
})


app.get("/posts/:postId",async(req,res) => {
   const postDetails = await getPost(req.params.postId);
    res.render("details",{header:postDetails.postHeader,data:postDetails})

})

app.get("*",(req,res) => {
    res.status(404).send("There is no route for this request.Try another one")
})







app.listen(process.env.PORT);