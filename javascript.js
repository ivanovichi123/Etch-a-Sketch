const grid = document.querySelector("#grid");
function squares(){
    for (i = 0; i < 256; i++){
        const square = document.createElement("div");
        square.classList.add("square" + i);
        square.style.height = "50px";
        square.style.width = "50px";
        square.style.backgroundColor = "blue";
        square.style.borderStyle = "solid";
        square.style.borderColor = "black";
        grid.appendChild(square);
    }
}    
squares();


