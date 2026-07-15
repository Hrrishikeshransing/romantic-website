/* =====================================
   Forever Us - Premium JavaScript
===================================== */

// Wait until page loads
window.addEventListener("load", () => {

    // Hide loader after 1.5 seconds
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if(loader){
            loader.style.display = "none";
        }
    },1500);

});

// =============================
// Surprise Button
// =============================

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

if(surpriseBtn){

    surpriseBtn.addEventListener("click",()=>{

        surpriseMessage.style.display="block";

        surpriseBtn.innerHTML="❤️ Forever ❤️";

        surpriseMessage.scrollIntoView({
            behavior:"smooth"
        });

    });

}

// =============================
// Music Player
// =============================

const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

let playing=false;

if(musicBtn){

    musicBtn.addEventListener("click",()=>{

        if(!playing){

            music.play();

            musicBtn.innerHTML='<i class="fas fa-pause"></i>';

            playing=true;

        }

        else{

            music.pause();

            musicBtn.innerHTML='<i class="fas fa-music"></i>';

            playing=false;

        }

    });

}
// =============================
// Floating Hearts Animation
// =============================

const heartsContainer = document.getElementById("hearts-container");

function createHeart(){

    if(!heartsContainer) return;

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },8000);

}

// Create a heart every 500 milliseconds
setInterval(createHeart,500);


// =============================
// Dark Mode Toggle
// =============================

const themeToggle = document.getElementById("themeToggle");

if(themeToggle){

    themeToggle.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){

            themeToggle.innerHTML='<i class="fas fa-sun"></i>';

        }

        else{

            themeToggle.innerHTML='<i class="fas fa-moon"></i>';

        }

    });

}


// =============================
// Smooth Navigation
// =============================

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const target=document.querySelector(link.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// =============================
// Love Timer (Time Together)
// =============================

// Change this to your relationship or wedding date
const loveDate = new Date("2024-01-01T00:00:00").getTime();

function updateLoveTimer(){

    const now = new Date().getTime();

    const difference = now - loveDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    if(document.getElementById("days")){
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }

}

updateLoveTimer();

setInterval(updateLoveTimer,1000);


// =============================
// Scroll Reveal Animation
// =============================

const revealElements = document.querySelectorAll(
    ".timeline-item, .gallery img, .letter, .timer div"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(element=>{

    element.style.opacity="0";
    element.style.transform="translateY(50px)";
    element.style.transition="all .8s ease";

    observer.observe(element);

});

// =============================
// Navbar Scroll Effect
// =============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.background = "rgba(255,255,255,0.90)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";

    }
    else{

        navbar.style.background = "rgba(255,255,255,.25)";
        navbar.style.backdropFilter = "blur(18px)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});


// =============================
// Auto Play Music (Browser Permission)
// =============================

window.addEventListener("click", () => {

    if(!playing){

        music.play().then(() => {

            playing = true;
            musicBtn.innerHTML = '<i class="fas fa-pause"></i>';

        }).catch(() => {
            // Browser blocked autoplay
        });

    }

}, { once: true });


// =============================
// Welcome Message
// =============================

console.log("❤️ Forever Us Premium Website Loaded ❤️");


// =============================
// Footer Year
// =============================

const footer = document.querySelector("footer");

if(footer){

    const year = new Date().getFullYear();

    footer.innerHTML =
        `Made with ❤️ Forever • ${year}`;

}


// =============================
// Page Loaded
// =============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Everything is working perfectly ❤️");

});
