const grid = document.querySelector("#grid");
function squares(){
    for (i = 0; i < 256; i++){
        const square = document.createElement("div");
        square.style.boxSizing = "border-box";
        square.style.height = "50px";
        square.style.width = "50px";
        square.style.backgroundColor = "white";
        // square.style.borderStyle = "solid";
        // square.style.borderColor = "black";
        grid.appendChild(square);
        square.addEventListener ("mousemove", () => {
            square.style.backgroundColor = "black";
        })
    }
}    
squares();


