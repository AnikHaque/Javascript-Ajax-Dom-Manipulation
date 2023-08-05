// Get references to the button and div elements
const changeButton = document.getElementById('changeButton');
const messageDiv = document.getElementById('messageDiv');

// Add click event listener to the button
changeButton.addEventListener('click', () => {
    // Change the content of the div element
    messageDiv.innerHTML = 'Congrats!!! I am so thrilled to hear that you reached your goal. You inspire by having such ambitious dreams, then putting in the hard work to achieve them.';
    // Or you can change it to a new message
    // messageDiv.textContent = 'New Message';
});



