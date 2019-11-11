console.log("tyson connected!");

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


burger.addEventListener('click', () => {
    console.log('You pushed me')
    nav.classList.toggle('nav-active');


    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
        }
    });

    burger.classList.toggle('toggle');

  });

  

}

navSlide(); //call navslide function



var codeSection = document.querySelector("#projects"); //declare variable for coding project section
var styleSection = document.querySelector("#designprojects"); //declare variable for design project section
var codeBtn = document.querySelector("#codingbtn");
var designBtn = document.querySelector("#designbtn");

showCoding = () => {
    codeSection.style.display = "block" 
    styleSection.style.display = "none";
    designBtn.style.background = "white"
    designBtn.style.color = "#14a098"
    codeBtn.style.background = "#14a098";
    codeBtn.style.color = "white";
    
}

showDesign = () => {
    styleSection.style.display = "block";
    codeSection.style.display = "none";
    designBtn.style.background = "#14a098"
    designBtn.style.color = "white"
    codeBtn.style.background = "white";
    codeBtn.style.color = "#14a098"

}