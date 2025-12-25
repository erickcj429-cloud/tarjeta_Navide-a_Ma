const message = "Hola Mama Felices \nFiestas le mando \ny un fuerte\nabrazo Te quiero🎄";
const speed = 70;

const btn = document.getElementById("btn");
const scene = document.getElementById("scene");
const text = document.getElementById("screenText");
const mouth = document.getElementById("mouth");
const music = document.getElementById("music");

let i = 0;
let mouthAnim;

btn.onclick = () => {
    btn.style.display = "none";
    scene.style.display = "block";
    music.play();
    type();
};

function type() {
    if (i < message.length) {
        text.textContent += message[i];
        i++;
        talk(true);
        setTimeout(type, speed);
    } else {
        talk(false);
    }
}

function talk(active) {
    if (active && !mouthAnim) {
        mouthAnim = setInterval(() => {
            mouth.style.height =
                mouth.style.height === "6px" ? "12px" : "6px";
        }, 120);
    }

    if (!active) {
        clearInterval(mouthAnim);
        mouthAnim = null;
        mouth.style.height = "6px";
    }
}