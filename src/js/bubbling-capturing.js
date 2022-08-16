document.querySelector("#grand-parent").addEventListener("click", ()  => {
    console.log("grand parent");
}, true)
document.querySelector("#parent").addEventListener("click", function() {
    console.log("parent");
}, true)
document.querySelector("#child").addEventListener("click", function() {
    console.log("child");
}, true)

