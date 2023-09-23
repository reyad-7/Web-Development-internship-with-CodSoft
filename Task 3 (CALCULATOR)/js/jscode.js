// Get the display element by its ID
let input = document.getElementById('displaye-screen');

// Select all the buttons on the calculator
let buttons = document.querySelectorAll('button');

// Initialize a string to store the input
let string = "";

// Convert the NodeList of buttons into an array for easy iteration
let arr = Array.from(buttons);

// Iterate through each button
arr.forEach(button => {
    // Add a click event listener to each button
    button.addEventListener('click', (e) => {
        // Check if the clicked button is the '=' operator
        if (e.target.innerHTML == '=') {
            // Evaluate the current input string and display the result
            string = eval(string);
            input.value = string;
        }
        // Check if the clicked button is 'AC' (All Clear)
        else if (e.target.innerHTML == 'AC') {
            // Clear the input string and display
            string = "";
            input.value = string;
        }
        // Check if the clicked button is 'DEL' (Delete)
        else if (e.target.innerHTML == 'DEL') {
            // Remove the last character from the input string
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        // For other buttons (numbers and operators)
        else {
            // Append the button's text (number or operator) to the input string
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
