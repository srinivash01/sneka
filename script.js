// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1500);

});

// ===============================
// AOS ANIMATION
// ===============================

AOS.init({
    duration: 1000,
    once: false,
    easing: "ease-in-out",
});

// ===============================
// TYPING EFFECT
// ===============================

new Typed("#typing", {

    strings: [
        "SEO Analyst",
        "Digital Marketer",
        "WordPress Developer",
        "Content Creator"
    ],

    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1800,
    loop: true

});

// ===============================
// SCROLL TO TOP
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.opacity = "1";
        topBtn.style.pointerEvents = "auto";

    }else{

        topBtn.style.opacity = "0";
        topBtn.style.pointerEvents = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ===============================
// HEADER SHADOW
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";
        header.style.padding="15px 8%";

    }else{

        header.style.boxShadow="none";
        header.style.padding="20px 8%";

    }

});

// ===============================
// ACTIVE NAVBAR
// ===============================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(window.scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ===============================
// FLOATING PROFILE
// ===============================

const profile=document.querySelector(".profile-circle");

window.addEventListener("mousemove",(e)=>{

    let x=(window.innerWidth/2-e.pageX)/35;
    let y=(window.innerHeight/2-e.pageY)/35;

    profile.style.transform=
    `rotateY(${x}deg) rotateX(${-y}deg)`;

});

// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons=document.querySelectorAll(".btn,.btn2");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-8px) scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});

// ===============================
// SKILL CARD ANIMATION
// ===============================

const cards=document.querySelectorAll(".skill-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,#dbeafe,#ffffff)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#fff";

    });

});

// ===============================
// PROJECT HOVER
// ===============================

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        card.style.transform=
        `rotateX(${-(y-150)/20}deg)
         rotateY(${(x-150)/20}deg)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="rotateX(0) rotateY(0)";

    });

});

// ===============================
// END
// ===============================
