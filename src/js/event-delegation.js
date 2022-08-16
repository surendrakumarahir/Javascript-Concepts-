console.log("fhisdifo");

// document.querySelector("#main").addEventListener("click", (e) => {
//     console.log(e.target.id);
// })

document.querySelector("#main").addEventListener('keyup', (e) => {
    console.log(e);
    if(e.target.dataset.upper != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
})

// add the event are not buble up 