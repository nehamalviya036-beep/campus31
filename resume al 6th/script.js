// file input

const fileInput = document.querySelector("input[type='file']")
const uploadBtn = document.querySelector(".upload-box button")

// result elements

const scoreBox = document.querySelector(".score")
const skillBox = document.querySelectorAll(".result-card p")[0]
const missingSkillBox = document.querySelectorAll(".result-card p")[1]
const jobMatchBox = document.querySelectorAll(".result-card p")[2]



uploadBtn.addEventListener("click", () => {

fileInput.click()

})



fileInput.addEventListener("change", () => {

const file = fileInput.files[0]

if(!file){

alert("Please upload resume")

return

}

// show file name

uploadBtn.innerText = file.name

// start analysis

analyzeResume()

})



function analyzeResume(){


// loading animation

scoreBox.innerText = "Analyzing..."


setTimeout(()=>{

animateScore(82)

skillBox.innerText = "Python, SQL, Machine Learning"

missingSkillBox.innerText = "AWS, Project Management"

jobMatchBox.innerText = "Software Engineer Role Matched!"

},2000)

}



// score animation

function animateScore(finalScore){

let score = 0

let interval = setInterval(()=>{

score++

scoreBox.innerText = score + "%"

if(score >= finalScore){

clearInterval(interval)

}

},30)

}


const mysql = require("mysql2")

const db = mysql.createConnection({

host:"localhost",
user:"root",
password:"",
database:"resumeAI"

})

db.connect((err)=>{

if(err){
console.log(err)
}else{
console.log("MySQL Connected")
}

})

module.exports = db


async function saveResumeData(){

const data = {

name:"Neha",
email:"neha@gmail.com",
score:82,
skills:"JavaScript, HTML, CSS",
missingSkills:"Node, SQL"

}

await fetch("http://localhost:5000/saveResume",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

})

}