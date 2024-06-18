const grid = document.querySelector("#grid");
let amount = 16
let size = 640000/(amount * amount);
let realSize = Math.sqrt(size); //This operation with the previous one is used to resize correctly the size of every square
const change = document.querySelector("#change");

change.addEventListener ("click", () => {
    amount = prompt("Select the size of the grid", 16);
    if (amount > 100) {
        alert("Enter a value between 0 - 100 please.");
    } else {
        size = 640000/(amount * amount);
        realSize = Math.sqrt(size);
        const remove = document.querySelectorAll(".square");
        remove.forEach((grid) => grid.remove());
        squares(amount);
    }
 })

function squares(amount){
    for (i = 0; i < amount * amount; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.boxSizing = "border-box";
        square.style.height = realSize + "px";
        square.style.width = realSize + "px";
        square.style.backgroundColor = "white";
        grid.appendChild(square);
        square.addEventListener ("mousemove", () => {
            square.style.backgroundColor = "black";
        })
    }
}  

squares(amount);
