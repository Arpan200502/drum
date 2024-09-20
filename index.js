var drum = document.querySelectorAll(".drum").length;

// Loop to add event listeners to each drum button
for (var i = 0; i < drum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var button = this.innerHTML;
        Makesound(button);
        ButtonAnimation(button);
    });
}

// Event listener for keyboard key presses (added once, outside the loop)
document.addEventListener("keydown", function(event) {
    Makesound(event.key);
    ButtonAnimation(event.key);
});

// Function to play the sound based on the key/button
function Makesound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.volume = 0.2;
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.volume = 0.2;
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.volume = 0.2;
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.volume = 0.2;
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.volume = 0.2;
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.volume = 0.2;
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.volume = 0.2;
            audio.play();
            break;
        default:
            console.log("Invalid key: " + key);
            break;
    }
}

// Function to add and remove animation on button press
function ButtonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    // Check if the activeButton exists before applying the animation
    if (activeButton) {
        activeButton.classList.add("pressed");

        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
