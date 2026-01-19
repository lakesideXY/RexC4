const myBox1 = document.getElementById("myBox1");
const myBtn = document.getElementById("myBtn");
const myBox2 = document.getElementById("myBox2");
const myBox3 = document.getElementById("myBox3");
const myBtn1 = document.getElementById("myBtn1");
const myImg = document.getElementById("myImg");
const moveAmount = 10;
let x = 0;
let y = 0;


myBtn.addEventListener("click", function(event){
    myBox1.textContent = "Walker";
    myBox1.style.backgroundColor = "tomato";
});

myBox1.addEventListener("mouseover", function(event){
    event.target.textContent = "Lakes";
    event.target.style.backgroundColor = "orange";
});

myBox1.addEventListener("mouseout", event =>{
    myBox1.textContent = "Walker_xy";
    event.target.style.backgroundColor = "grey";
    event.target.style.width = "350px";
});

document.addEventListener("keydown", event => {
    myBox2.textContent = "Clay";
    myBox2.style.backgroundColor = "yellow";
});

document.addEventListener("keyup", event => {
    myBox2.textContent = "Cool";
    myBox2.style.backgroundColor = "blue";
});

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox3.style.top = `${y}px`;
        myBox3.style.left = `${x}px`;
    }
});

myBtn1.addEventListener("click", function(event){
    event.target.style.backgroundColor = "pink";

    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myBtn1.textContent = "Hide";
    }
    else{
        myImg.style.visibility = "hidden";
        myBtn1.textContent = "Show";
    }
});
    