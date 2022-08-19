// document.getElementById("count-el").innerText = 5
// let count = 5
// count =3;console.log(count)


let countEl = document.getElementById("count-el")
console.log(countEl)
let count =0;
function increment()
{
    count = count + 1;
    // countEl.innerText = count
    countEl.textContent = count
    console.log(count);
}


let saveEl = document.getElementById("save-el") 
let totalEl = document.getElementById("total-el")
console.log(saveEl)
let totalCount = 0;
function save ()
{
     let savecount = count + " - ";
     let tcount = count;
    //  saveEl.innerText += savecount
        saveEl.textContent += savecount;
        totalCount +=count;
        totalEl.textContent =  "Total Entries: ";
        totalEl.textContent +=totalCount;
        countEl.textContent = 0
        count =0  

}

function reset()
{
    totalCount = 0;
    count =0;
    saveEl.textContent = "Previous entries: ";
    saveEl.textContent += count;
    totalEl.textContent =  "Total Entries: ";
    totalEl.textContent +=totalCount;
}
// let welcomeEl = document.getElementById("welcome-el")
// let name = "vineet"
// let greeting = "Welcome to the Passenger Count App "
// welcomeEl.innerText = greeting + name
// welcomeEl.innerText = welcomeEl.innerText + "👋"