const buttons=document.querySelectorAll("button");

//Audio files
const crashAudio = new Audio("sounds/crash.mp3");
const kickBassAudio = new Audio("sounds/kick-bass.mp3");
const snareAudio = new Audio("sounds/snare.mp3");
const tom1audio = new Audio("sounds/tom-1.mp3");
const tom2audio = new Audio("sounds/tom-2.mp3");
const tom3audio = new Audio("sounds/tom-3.mp3");
const tom4audio = new Audio("sounds/tom-4.mp3");


buttons.forEach(button => { button.addEventListener("click", soundAndAnimation)}); 
document.addEventListener("keydown", soundAndAnimation);

function soundAndAnimation(event) {
    makeSound(event);
    animate(event);
}


function makeSound(event) {
    switch (event.key || event.target.innerHTML) {
        case "w":
            crashAudio.play();
            break;
        case "a":
            kickBassAudio.play();
            break;
        case "s":
            snareAudio.play();
            break;
        case "d":
            tom1audio.play();
            break;
        case "j":
            tom2audio.play();
            break;
        case "k":
            tom3audio.play();
            break;
        case "l":
            tom4audio.play();
            break;
        default:
            console.log("Error");
            break;
    }
    
}

function animate(event) {
    document.querySelector("." + (event.key || event.target.innerHTML)).classList.add("pressed");
    setTimeout(() =>  { 
        document.querySelector("." + (event.key || event.target.innerHTML)).classList.remove("pressed");
    }, 100);
}