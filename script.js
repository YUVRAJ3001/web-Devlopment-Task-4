const home = document.querySelector("#home");
const nav = document.querySelector('.navbar');
const project = document.querySelector("#project");
const projectSection = document.querySelector(".project-page");
const connect = document.querySelector("#connect");
const social = document.querySelector(".footer-ele");
const socialMedia = document.querySelector(".social-media");
const project1 = document.querySelector(".project-1");
const project2 = document.querySelector(".project-2");
const internProject = document.querySelectorAll(".internship-project");
const linkedin = document.querySelector("#linkedin");
const github = document.querySelector("#github");
const instagram = document.querySelector("#instagram");
const twiteer = document.querySelector("#twitter");
const discord = document.querySelector("#discord");
const contact = document.querySelector(".contact");


//scroll to contact-info
connect.addEventListener('click' , function(){
    window.scrollTo({
        top: social.offsetTop,
        behavior: 'smooth'
    });

    setTimeout(() => {
        socialMedia.style.color = 'rgb(0, 149, 255)';
        linkedin.style.color = 'rgb(0, 149, 255)';
        github.style.color = 'rgb(0, 149, 255)';
        instagram.style.color = 'rgb(0, 149, 255)';
        twiteer.style.color = 'rgb(0, 149, 255)';
        discord.style.color = 'rgb(0, 149, 255)';
        contact.style.color = 'rgb(0, 149, 255)';
    }, 1000);

    setInterval(() => {
        socialMedia.style.color = '';
        linkedin.style.color = '';
        github.style.color = '';
        instagram.style.color = '';
        twiteer.style.color = '';
        discord.style.color = '';
        contact.style.color = '';
    }, 2000);

});



//scroll to project-section
project.addEventListener('click' , function(){
 
    window.scrollTo({
        top: projectSection.offsetTop,
        behavior: 'smooth'
    });

     
});


//scrollto home 
home.addEventListener('click', function(){
    window.scrollTo({
        top: nav.offsetTop,
        behavior: "smooth"
    });
});


//GSAP learning and modified portfolio

//navbaar timeline
var navBar = gsap.timeline();

navBar.from("li", {
    y: "-0.2",
    opacity: 0,
    duration: 1,
    delay: 0.3,
    stagger: 0.3
})

navBar.from("#resume", {
    y: "-0.1",
    opacity: 0,
    duration: 0.3,
    delay: 0.3,
})

navBar.from(".header-part", {
    y: "-0.3",
    opacity: 0,
    duration: 0.3,
    delay: 0.3,
})

navBar.from(".skill-section", {
    y: "-0.3",
    opacity: 0,
    duration: 0.3,
    delay: 0.3,
})

navBar.from(".logo-box img", {
    y: "-0.3",
    opacity: 0,
    duration: 0.3,
    delay: 0.3,
    stagger: 0.3
})

navBar.from(".img-box", {
    x: "50%",
    duration: 0.5,
    delay: 0.5
})

gsap.from(".about-me", {
    x: "50%",
    duration: 1,
    delay: 1
})


//scrollTrigger
gsap.from(".college", {
    scale: 0,
    duration: 1,
    x: "-50%" ,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".college",
        scroller: "body",
        start: "top 30%",
        end: "top 30%",
        scrub: 2
    }
})