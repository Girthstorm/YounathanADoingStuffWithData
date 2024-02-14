import { globalData, ten, twenty, thirty, fourty, fifty, sortAge, sortFN, sortH, sortId, sortLN, peopleDiv, sortType, amount } from "./getData.js";

let peopleArr = [];

const getPeople = () => {
    peopleArr = globalData.slice(0, amount);
    
    console.log(peopleArr)
    return peopleArr;
}
getPeople()



console.log('')

// const updateDisplay = () =>{
    
//     peopleArr.forEach(item => {
//         const content = `
//             <p>Id: ${item.Id}</p>
//             <p>First Name: ${item.FirstName}</p>
//             <p>Last Name: ${item.LastName}</p>
//             <p>Age: ${item.Age}</p>
            
//             <p>Height: ${item.Height}</p>
//         `;
//         peopleDiv.innerHTML = content;
//         parentContainer.appendChild(itemDiv);
//     })
        
// }

const updateDisplay = () =>{
    const newDiv = document.createElement("div")
    peopleArr.forEach(item => {
        const content = `
            <p>Id: ${item.Id}</p>
            <p>First Name: ${item.FirstName}</p>
            <p>Last Name: ${item.LastName}</p>
            <p>Age: ${item.Age}</p>
            <p>Height: ${item.Height}</p>
        `;
        newDiv.innerHTML = content;
        peopleDiv.appendChild(newDiv);
    })
        
}




export {peopleArr, getPeople, updateDisplay}