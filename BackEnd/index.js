import express from "express";
import cors from "cors"
import dotenv from "dotenv"



let app = express();
app.use(cors());
app.use(express.json());


// on it 
const port = 8000;
app.listen(port,()=> {
console.log("working in the full speed")
})