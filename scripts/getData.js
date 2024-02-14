let ten = document.getElementById('ten');
let twenty = document.getElementById('twenty');
let thirty = document.getElementById('thirty');
let fourty = document.getElementById('fourty');
let fifty = document.getElementById('fifty');
let sortId = document.getElementById('sortId');
let sortFN = document.getElementById('sortFN');
let sortLN = document.getElementById('sortLN');
let sortH = document.getElementById('sortH');
let sortAge = document.getElementById('sortAge');
let peopleDiv = document.getElementById('peopleDiv');
let sortType = "firstName"
let amount = 10;

import {peopleArr, getPeople, updateDisplay} from "./app.js"

const getData = async () =>{
    const promise = await fetch("../data/data.json");
    const data = await promise.json();
    return data.People
}

ten.addEventListener('click', () => {
    amount = 10;
    getPeople()
})

twenty.addEventListener('click', () => {
    amount = 20;
    getPeople()
})

thirty.addEventListener('click', () => {
    amount = 30;
    getPeople()
})

fourty.addEventListener('click', () => {
    amount = 40;
    getPeople()
})

fifty.addEventListener('click', () => {
    amount = 50;
    getPeople()
})

sortId.addEventListener('click', ()=>{
    peopleArr.sort((a, b) => a.Id - b.Id);
    updateDisplay();
    console.log(peopleArr)
})

sortFN.addEventListener('click', ()=>{
    peopleArr.sort((a, b) => a.FirstName.localeCompare(b.FirstName));
    updateDisplay();
    console.log(peopleArr)
})

sortLN.addEventListener('click',()=>{
    console.log(peopleArr)
    peopleArr.sort((a, b) => a.LastName.localeCompare(b.LastName));
    updateDisplay();
    console.log(peopleArr)
})

sortH.addEventListener('click', ()=> {
    peopleArr.sort((a, b) => a.Height - b.Height);
    updateDisplay();
    console.log(peopleArr)
})

const globalData = await getData();
console.log(globalData)

export {globalData, ten, twenty, thirty, fourty, fifty, sortAge, sortFN, sortH, sortId, sortLN, peopleDiv, sortType, amount};