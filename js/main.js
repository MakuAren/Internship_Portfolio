console.log("hello world");

let myName = "Siddharth";

const PI = 3.14;
let x = 0;
// setInterval(() => {
//     document.getElementById("tup").innerHTML = x;
//     x++;
// }, 1000);

let navOpacity = 0;
let hcOpacity = 1;
let projOpacity = 0;

function show() {
    navOpacity = 1;
    hcOpacity = 1;
    projOpacity = 1;
    document.getElementById("hContainer").style.opacity = 1;
    document.getElementById("navigation").style.backgroundColor = "rgba(18,18,18,1)";
    document.getElementById("navContainer").style.backgroundColor = "rgba(18,18,18,1)";
    document.getElementById("skills").style.opacity = 1;
}

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    let bottomScroll = scroll+window.innerHeight;
    console.log(scroll);

    // navbar and header opacity =============================
    if(scroll > 100 && navOpacity < 1){
        navOpacity+=.1;
        hcOpacity-=.1;
    } else if (scroll < 100 && navOpacity > 0) {
        navOpacity-=.1;
        hcOpacity+=.1;
    }
    document.getElementById("hContainer").style.opacity = hcOpacity;
    document.getElementById("navigation").style.backgroundColor = "rgba(18,18,18,"+navOpacity+")";
    document.getElementById("navContainer").style.backgroundColor = "rgba(18,18,18,"+navOpacity+")";

    // features =============================
    if(scroll > (window.innerHeight/2)-100 && projOpacity < 1){
        projOpacity+=.1;
    } else if(scroll < (window.innerHeight/2)-100 && projOpacity > 0){
        projOpacity-=.1;
    }
    document.getElementById("skills").style.opacity = projOpacity;
    document.getElementById("projects").style.opacity = projOpacity;
});



// skills ==============================

let btns = document.getElementsByClassName("btn");
let past = 1;
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    let actPic = document.getElementById("p"+past);
    let skillNum = i+1;
    current[0].src = "./images/logo/"+past+".png";
    actPic.style.display = "none";
    actPic.className = actPic.className.replace(" active", "");
    current[0].className = current[0].className.replace(" active", "");

    console.log(skillNum);

    let currentPic = document.getElementById("p"+skillNum);
    past = skillNum;
    currentPic.style.display = "block";
    this.className += " active";
    this.src = "./images/logo/"+skillNum+"c.png";
  });
}

