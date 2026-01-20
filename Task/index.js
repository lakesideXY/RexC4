const myInput = document.getElementById("myInput");
const myList = document.getElementById("myList");

function myBtn (){
    if (myInput.value === ''){
        alert("Please enter your next task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = myInput.value;
        myList.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "❌";
        li.appendChild(span);
    }
    myInput.value = "";
    saveData();
}

myList.addEventListener("click", function(event){
       if(event.target.tagName === "SPAN"){
            event.target.parentElement.remove();
            saveData();
        }
});

myList.addEventListener('click', function (event) {

        if (event.target.style.textDecoration === 'line-through') {
            event.target.style.textDecoration = 'none';
}
        else {
            event.target.style.textDecoration = 'line-through';
}
});

function saveData(){
        localStorage.setItem("data", myList.innerHTML);
}
function showTask(){
        myList.innerHTML = localStorage.getItem("data");
}
    showTask();