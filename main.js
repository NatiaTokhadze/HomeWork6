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

// task2

let changeColorBtn = document.getElementById(changeColorBtn)
changeColorBtn.addEventListener("click", () => {
    let color = document.getElementById("color").value
    if (color == '') {
        AudioListener("please input a color")
        return
        // not to continue execution if no color set
    }
    // accept only red, blue, green, black, white
    if (color == 'red' || color == 'blue' || color == 'green' || color == 'black' || color == 'white') {
        document.body.style.beckgroundColor = color
    }
    else {
        alter("please input the color allowed")
    }
})


// Task3

let getAverageBtn = document.getElementById("getAverageBtn")


getAverageBtn.addEventListener("click", () => {

    let digits = document.getElementById("digits").value // get string from input
    //console.log(digits)

    let digitsArray = digits.split(":") // split string using semicolons and get a string array 

    //console.log(digitsArray)

    let sum = 0

    for (el of digitsArray) // get each element of string array
    {
        el = parseInt(el) // convert string element to number
        sum += el // make a sum of numbers



    }

    let numberOElements = digitsArray.length // get an array length
    let average = sum / numberOElements // calculate average

    document.getElementById("resultAverage").value = average //show the result in the input field
    console.log(average)


})
