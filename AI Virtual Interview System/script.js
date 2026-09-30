uploadBtn.addEventListener("click", async () => {

  const file = fileInput.files[0];
  if(!file){
    alert("Please select file");
    return;
  }

  const formData = new FormData();
  formData.append("resume",file);

  try{

    const response = await fetch("http://localhost:5000/upload",{
      method:"POST",
      body:formData
    });

    const data = await response.json();

    if(!data.success){
      alert(data.message);
      return;
    }

    document.getElementById("skills").textContent =
      "Skills Found: "+data.skills.join(",");

    document.getElementById("sourceText").textContent =
      data.source_text;

    document.getElementById("scoreText").textContent =
      data.ats_score+"%";

  }

  catch(error){
    console.log(error);
    alert("API connection failed");
  }

});