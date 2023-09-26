const inputEl = document.getElementById("input-value")
const convertBtn = document.getElementById("convert-btn")

const lenghOutput = document.getElementById("resultM") 
const volumeOutput = document.getElementById("resultL")
const massOutput = document.getElementById("resultK")

function meterToFeet() {
    let meter = (inputEl.value * 3.281).toFixed(3);
    let feet = (inputEl.value * 0.304).toFixed(3);
    let input = ""
    input += `${inputEl.value} meters = ${meter} feet | ${inputEl.value} feet = ${feet} meters`
    lenghOutput.innerHTML = input;
}

function litersToGallons() {
    let liter = (inputEl.value* 0.264).toFixed(3);
    let gallon = (inputEl.value * 3.785).toFixed(3);
    let input = ""
    input += `${inputEl.value} liter  = ${liter} gallons | ${inputEl.value} gallons= ${gallon} liters`
    volumeOutput.innerHTML = input;

}

function kilogramsToPounds() {
    let kilos = (inputEl.value * 2.204).toFixed(3);
    let pounds = (inputEl.value * 0.453).toFixed(3); 
    let input = ""
    input += `${inputEl.value} pounds = ${pounds} kilos | ${inputEl.value} kilos = ${kilos} pounds `
    massOutput.innerHTML = input;
}

convertBtn.addEventListener("click", function() {
    meterToFeet()
    litersToGallons()
    kilogramsToPounds()
})
