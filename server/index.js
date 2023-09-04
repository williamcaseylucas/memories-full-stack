import express from "express";
import bodyParser from "body-parser";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import {} from "dotenv/config";
import postRoutes from "./routes/posts.js";

const app = express();

// Means anything going to postRoutes will have prefix of /posts
// To test, go to localhost:5000/posts

// For images
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

// mongodb.com/cloud/atlas
// will create clusters

// const CONNECTION_URL = `mongodb+srv://wcasey:${process.env.PASSWORD}@cluster0.44jwyvs.mongodb.net/?retryWrites=true&w=majority`
const CONNECTION_URL = `mongodb://root:example@localhost:27017/?authMechanism=DEFAULT`;
const PORT = process.env.PORT || 5000;

// Avoids warnings in terminal
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
