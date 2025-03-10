const gridContainer = document.querySelector(".grid-container")
const resetButton = document.querySelector(".reset-button")
const blackButton = document.querySelector(".black-button")
const rainbowButton = document.querySelector(".rainbow-button")
const eraseButton = document.querySelector(".erase-button")
const gridSizeButton = document.querySelector(".grid-size-button")
const gridSizeDisplay = document.querySelector(".grid-size-display")
const currentModeDisplay = document.querySelector(".grid-current-mode-display")

let currentMode = "erase"
let currentSize = 16
gridSizeDisplay.textContent = `Current Grid Size: ${currentSize}`
currentModeDisplay.textContent = "Current Mode: None"

function createGrid(size) {
    gridContainer.innerHTML = ""
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++){
        const square = document.createElement("div")
        square.classList.add("square")
        square.addEventListener("mouseover", () => {
            if(currentMode === "black"){
                square.style.backgroundColor = "black"
            } else if(currentMode === "rainbow"){
                square.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
            } else if(currentMode === "erase"){
                square.style.backgroundColor = "white"
            }
        })
        gridContainer.appendChild(square)
    }
}

gridSizeButton.addEventListener("click" , () => {
    let size = prompt("Please enter grid size (max 100):")
    size = parseInt(size)

    if(size > 100 || size < 1 || isNaN(size)){
        alert("Please enter a number between 1 and 100.")
        return
    }
    currentSize = size
    createGrid(size)
    gridSizeDisplay.textContent = `Current Grid Size: ${currentSize}`
})

blackButton.addEventListener("click" , () => {
    currentMode = "black"
    currentModeDisplay.textContent = "Current Mode: Black"
})

rainbowButton.addEventListener("click" , () => {
    currentMode = "rainbow"
    currentModeDisplay.textContent = "Current Mode: Rainbow"
})

eraseButton.addEventListener("click" , () => {
    currentMode = "erase"
    currentModeDisplay.textContent = "Current Mode: Erase"
}) 


createGrid(currentSize)