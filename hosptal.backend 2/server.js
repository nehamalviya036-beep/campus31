const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

/* Database connection */
app.get("/", (req, res) => {
  res.send("Hospital Backend Running 🚀");
});
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "hospital_db"
});

db.connect(err=>{
if(err){
console.log("Database error",err);
}else{
console.log("MySQL Connected");
}
});

/* Appointment API */

app.post("/appointment",(req,res)=>{

const {doctor,specialization,patient_name,date,issue} = req.body;

const sql = "INSERT INTO appointments (doctor,specialization,patient_name,date,issue) VALUES (?,?,?,?,?)";

db.query(sql,[doctor,specialization,patient_name,date,issue],(err,result)=>{

if(err){
res.status(500).json({message:"Error"});
}else{
res.json({message:"Appointment Saved"});
}

});

});

app.listen(5000,()=>{
console.log("Server running on http://localhost:5000");
});