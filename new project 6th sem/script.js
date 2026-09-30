const slides = [
  {
    img:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title:"WELCOME TO OUR WEB SITE",
    text:"Lorem ipsum is simply dummy text"
  },
  {
    img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title:"CREATIVE WEB DESIGN",
    text:"Modern & responsive websites"
  },
  {
    img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title:"BEST DIGITAL SOLUTION",
    text:"Your growth is our mission"
  }
];

let index=0;
const slider=document.getElementById("slider");
const title=document.getElementById("slide-title");
const text=document.getElementById("slide-text");
const dots=document.querySelectorAll(".dot");

function showSlide(i){
  slider.style.background=`url(${slides[i].img}) center/cover`;
  title.innerText=slides[i].title;
  text.innerText=slides[i].text;
  dots.forEach(d=>d.classList.remove("active"));
  dots[i].classList.add("active");
}

showSlide(0);
setInterval(()=>{ index=(index+1)%slides.length; showSlide(index); },3000);

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  alert("Message Sent ✅");
});






