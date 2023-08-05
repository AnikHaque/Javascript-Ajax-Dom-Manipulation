// Get references to the button and paragraph elements
const countButton = document.getElementById('countButton');
const counterElement = document.getElementById('counter');

// Initialize the count
let count = 0;

// Add click event listener to the button
countButton.addEventListener('click', () => {
    // Increment the count
    count++;
    // Update the paragraph element with the new count
    counterElement.textContent = count;
});