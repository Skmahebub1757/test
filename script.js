const links=document.querySelectorAll("nav a");

links.forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const id=this.getAttribute("href");

document.querySelector(id).scrollIntoView({

behavior:"smooth"

});

});

});
