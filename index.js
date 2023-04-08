//my code:

// const dodger = document.getElementById("dodger");

// function moveDodgerLeft(event) {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
//     if (event.key === "ArrowLeft") {

//         dodger.style.left = `${left - 1}px`
//     }

// }

// document.addEventListener("keydown", moveDodgerLeft)


// function moveDodgerRight(event) {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
//     if (event.key === "ArrowRight") {

//         dodger.style.left = `${left + 1}px`
//     }

// }

// document.addEventListener("keydown", moveDodgerRight)



// Lab code:



const dodger = document.getElementById("dodger");



function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}




document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});


function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left <= 360) {
        dodger.style.left = `${left + 1}px`;
    }
}




document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});


// code to find which key has been pressed

// document.addEventListener("keydown", function (event) {
//     console.log(event);
// });

// By defining the event parameter in the parentheses, we've given the body of 
// the callback access to that event object, which is what allows us to log it 
// to the console. Note that, as with any JavaScript parameter (and, in fact, 
//     any JavaScript variable), we can give it any valid JavaScript variable 
//     name we like. By convention, and in keeping with programming best practice 
//     of using meaningful variable names, the name JavaScript programmers use for
//      this parameter is usually either event or e. You will see these in a lot 
//      of JavaScript code, and we recommend you use them as well.


