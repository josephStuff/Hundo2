
// display message to the user.

function getMessage() {
    let userMessage = document.getElementById("message").value;
    Swal.fire(
        'Button clicked!',
        userMessage,
        "success"
    );
    console.log(userMessage);
}


// Program Entry Point

function getValues2() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // check if they are in fact INTEGERS !

    if(Number.isInteger(startValue) && Number.isInteger(endValue) ) {

        // generate a list of NUMBERS
        let numbers = generateNumbers(startValue, endValue);

        // DISPLAY A LIST OF NUMBERS
        displayNumbers(numbers);

    } 
    else {
        Swal.fire({
        icon: 'error',
        title: 'Ooops...',
        text: 'Only integers are allowed for Hundo'
         })
    }
    
}

function generateNumbers(start, end) {

    let numbers= [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }

    return numbers;

}

function displayNumbers(numbers) {

    let templateRows = "";
    for (let index = 0; index < numbers.length; index ++) {

        let number = numbers[index];

        if (number % 2 == 0) {
            className = "even";
        }
        else {
            className = "odd";
        }

        let row = `<tr><td class="${className}">${number}</td></tr>`;
        templateRows += row;

    }

    document.getElementById("results").innerHTML = templateRows;
}