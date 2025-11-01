import express from "express";
import dotenv from "dotenv";
import routes from "./Route/mainRoute.js";
import connectDB from "./DataBase/mongo.js";

dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.use("/notes", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server running at PORT: ${PORT}`));