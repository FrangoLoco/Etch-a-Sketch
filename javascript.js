let divGrid = document.getElementById("divs-grid")
let btnNewGrid = document.getElementById("new-grid")
let squaresPerSide = 0

btnNewGrid.addEventListener("click" , () => {
    divGrid.replaceChildren()
    while(squaresPerSide > 100 || squaresPerSide === 0 || Number.isNaN(squaresPerSide) || Math.sign(squaresPerSide) === -1){
        squaresPerSide = Number(prompt("How many squars do you want per side?"))
    }
    squares(squaresPerSide)
    squaresPerSide = 0
})  

let randomNumber = () => {
   return String(Math.floor(Math.random() * 255) + 1)
}

function squares (num){
    for(let i = 0; i < num ** 2 ; i++){
        let div = document.createElement("div")
        div.classList.add("inner-divs")
        div.style.cssText = `height: calc(100%/${num});
                            width: calc(100%/${num});`
        divGrid.appendChild(div)

        let innerDivs = document.querySelectorAll(".inner-divs")
        innerDivs.forEach(div => {
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
            })

            div.addEventListener("mouseout", () => {
                div.style.backgroundColor = ""
            })
            
        })
    }
}