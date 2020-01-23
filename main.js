const navSlide = () => {//navigation menu
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


burger.addEventListener('click', () => {
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

navSlide(); 



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

codeBtn.addEventListener('click', showCoding) //event listener for buttons
designBtn.addEventListener('click', showDesign)


// particles

const particles = [];

function setup() {
    let cnv = createCanvas(2000, 800);
    cnv.position(0, 0)
    
    const particlesLength = Math.floor(window.innerWidth / 10);
    
    for(let i = 0; i < particlesLength; i++) {
        particles.push(new Particle())
    }

}

function draw() {
    background('#0b0c10')
    particles.forEach((p, index) => {
        p.update();
        p.draw();
        p.checkParticles(particles.slice(index));
    })
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight)
}

class Particle {
    constructor() {
        // Position
        this.pos = createVector(random(width), random(height));

        //velocity
        this.vel = createVector(random(-0.5, 0.5), random(-0.5, 0.5));

        //size
        this.size = 10;
    }

    // update movements by adding velocity
    update() {
        this.pos.add(this.vel);
        this.edges();
    }

    //draw single particle
    draw() {
        noStroke()
        fill('rgba(20, 160, 152, 0.7)') 
        //fill('#14a098') 
        circle(this.pos.x, this.pos.y, this.size);
    }
    
    //detect edges
    edges() {
        if(this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1
        }
        if(this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1
        }        
    }

    //connect particles
    checkParticles(particles) {
        particles.forEach(particle => {
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)

            if(d < 120){
                stroke('rgba(255, 255, 255, 0.1)')
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
            }
        })
    }
}