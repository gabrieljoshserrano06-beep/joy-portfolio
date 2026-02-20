function toggleMenu(){
const menu=document.getElementById("menu");
menu.style.display=
menu.style.display==="flex"?"none":"flex";
}

function toggleTheme(){

document.body.classList.toggle("light-mode");

const btn=document.querySelector(".theme-btn");

if(document.body.classList.contains("light-mode")){
btn.textContent="☀️";
localStorage.setItem("theme","light");
}else{
btn.textContent="🌙";
localStorage.setItem("theme","dark");
}

}

if(localStorage.getItem("theme")==="light"){
document.body.classList.add("light-mode");
}

const text=[
"Virtual Assistant",
"Airbnb Property Manager",
"Customer Support Specialist",
"Remote Operations Assistant"
];

let i=0;
let j=0;
let current="";
let deleting=false;

function type(){

current=text[i];

if(!deleting){
document.getElementById("typing").textContent=
current.substring(0,j++);
if(j>current.length) deleting=true;
}else{
document.getElementById("typing").textContent=
current.substring(0,j--);
if(j===0){
deleting=false;
i=(i+1)%text.length;
}
}

setTimeout(type,120);
}

type();