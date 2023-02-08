
let arregloButton = []
let resultado =document.getElementById("resultado")
document.getElementById("buttonId").addEventListener("click",() =>{
    
    let buttonVariable = document.querySelector("#imputId").value;
    resultado.innerHTML+=`<div>${buttonVariable}</div>`
    
});



