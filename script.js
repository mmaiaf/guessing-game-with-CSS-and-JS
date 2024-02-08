const btnTry = document.querySelector("#btnTry")
const btnRTry = document.querySelector("#btnRtry")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let randomNumber = Math.round(Math.random()*10)
let xAttempt = 1

document.addEventListener('keypress', function(e){
    if(e.key == 'Enter' && screen1.classList.contains("hide")) {
        resetClick()
    }
})

function handleClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber){
        resetClick()
        document.querySelector("h2").innerText = `Você Acertou em ${xAttempt} tentativas`
    } else if (Number(inputNumber.value) < '0' || Number(inputNumber.value) > '10'){
        alert("Coloque um número entre 0 e 10")
    }

    inputNumber.value = ""
    xAttempt++
}
function backClick() {
    xAttempt = 1
    resetClick()
    randomNumber = Math.round(Math.random()*10)
}
function resetClick() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

btnTry.addEventListener('click', handleClick)
btnRTry.addEventListener('click', backClick)