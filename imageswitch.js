// Get references to the image and button elements
const imageElement = document.getElementById('image');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// Add click event listeners to the buttons
button1.addEventListener('click', () => {
    // Switch the image source to "image1.jpg"
    imageElement.src = "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg";
});

button2.addEventListener('click', () => {
    // Switch the image source to "image2.jpg"
    imageElement.src = "https://imageio.forbes.com/specials-images/imageserve/62d599ede3ff49f348f9b9b4/0x0.jpg?format=jpg&crop=821,821,x155,y340,safe&height=416&width=416&fit=bounds";
});
