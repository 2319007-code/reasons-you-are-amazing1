const compliments = [

"🌸 You're one of the kindest people I know.",

"🌈 Your smile makes everyone's day brighter.",

"⭐ You're capable of amazing things.",

"🦋 Never forget how awesome you are.",

"💖 You make the world happier.",

"🌻 Keep shining!",

"🎀 You're incredibly special.",

"🍀 You're stronger than you think.",

"✨ You deserve all the happiness.",

"🌺 Thank you for being you."
];

const button = document.getElementById("btn");

const message = document.getElementById("message");

button.addEventListener("click", function(){

const random = Math.floor(Math.random()*compliments.length);

message.innerHTML = compliments[random];

});
message.style.animation = "none";

message.offsetHeight;

message.style.animation = "pop 0.5s";
function createHeart(){

const heart = document.createElement("div");

heart.innerHTML = "💖";

heart.style.position = "fixed";

heart.style.left = Math.random()*window.innerWidth+"px";

heart.style.top = window.innerHeight+"px";

heart.style.fontSize = "30px";

heart.style.transition = "3s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="-50px";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},3000);

}

button.addEventListener("click",createHeart);
const letterBtn = document.getElementById("letterBtn");
const letter = document.getElementById("letter");

letterBtn.addEventListener("click", () => {

    if(letter.style.display==="block"){

        letter.style.display="none";

    }else{

        letter.style.display="block";

    }

});const memoryBtn = document.getElementById("memoryBtn");
const memory = document.getElementById("memory");

memoryBtn.addEventListener("click", () => {

    if(memory.style.display === "block"){

        memory.style.display = "none";

    }else{

        memory.style.display = "block";

    }

});