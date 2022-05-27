var audio1 = new Audio("sounds/boom.wav");
var audio2 = new Audio("sounds/clap.wav");
var audio3 = new Audio("sounds/hihat.wav");
var audio4 = new Audio("sounds/kick.wav");
var audio5 = new Audio("sounds/openhat.wav");
var audio6 = new Audio("sounds/ride.wav");
var audio7 = new Audio("sounds/snare.wav");
var audio8 = new Audio("sounds/tink.wav");
var audio9 = new Audio("sounds/tom.wav");

function play(audio){
    audio.play();
    audio.currentTime=0;
}
var animate = document.getElementById("aa");
animate.addEventListener("click", () => {
    animate.classList.add("playing")

    setInterval(() => {
        animate.classList.remove("playing")
    },200);
})

var ani = document.getElementById("ss");
ani.addEventListener("click", () => {
    ani.classList.add("playing")

    setInterval(() => {
        ani.classList.remove("playing")
    },200);
})

var anim = document.getElementById("dd");
anim.addEventListener("click", () => {
    anim.classList.add("playing")

    setInterval(() => {
        anim.classList.remove("playing")
    },200);
})

var anima = document.getElementById("ff");
anima.addEventListener("click", () => {
    anima.classList.add("playing")

    setInterval(() => {
        anima.classList.remove("playing")
    },200);
})

var transition = document.getElementById("gg");
transition.addEventListener("click", () => {
    transition.classList.add("playing")

    setInterval(() => {
        transition.classList.remove("playing")
    },200);
})

var animat = document.getElementById("hh");
animat.addEventListener("click", () => {
    animat.classList.add("playing")

    setInterval(() => {
        animat.classList.remove("playing")
    },200);
})

var transitio = document.getElementById("jj");
transitio.addEventListener("click", () => {
    transitio.classList.add("playing")

    setInterval(() => {
        transitio.classList.remove("playing")
    },200);
})

var anima = document.getElementById("kk");
anima.addEventListener("click", () => {
    anima.classList.add("playing")

    setInterval(() => {
        anima.classList.remove("playing")
    },200);
})

var trans = document.getElementById("ll");
trans.addEventListener("click", () => {
    trans.classList.add("playing")

    setInterval(() => {
        trans.classList.remove("playing")
    },200);
})
