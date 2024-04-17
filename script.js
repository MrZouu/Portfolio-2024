// Get the button element
const button = document.querySelector('#myButton');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Change the text of the button
    button.textContent = 'Clicked!';
    
    // Change the background color of the body
    document.body.style.backgroundColor = 'lightblue';
});

// Get the input element
const input = document.querySelector('#myInput');

// Add a keyup event listener to the input
input.addEventListener('keyup', () => {
    // Get the value of the input
    const inputValue = input.value;
    
    // Display the value in the console
    console.log(inputValue);
});