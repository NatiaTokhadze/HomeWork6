let modal = document.getElementById("myModal");
let openModalBtn = document.getElementById("openModalBtn");
let closeModalBtn = document.getElementById("closeModalBtn");



// open modal event
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block"
})
// close modal event
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none"
})

// Close the modal if the user clicks outside the modal content
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})