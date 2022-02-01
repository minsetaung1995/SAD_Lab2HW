let countHTML = document.getElementById("count")
let addBtn = document.getElementById("add-btn")
let clearBtn = document.getElementById("clear-btn")

let count = 0

countHTML.innerHTML = count.toString()

const updateCountDom = (value) => {
   
    countHTML.innerHTML = value.toString()
}


addBtn.addEventListener("click", () => {
    //console.log("Min Set Aung")
    count++;
    updateCountDom("Min Set Aung")
})

clearBtn.addEventListener("click", () => {
    
    count = 0;
    updateCountDom(count)
})