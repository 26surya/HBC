
document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("bgMusic");
    let playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Autoplay prevented. Waiting for user interaction.");
        });
    }
});

document.addEventListener("click", function playOnce() {
    let audio = document.getElementById("bgMusic");

    if (audio.paused) {
        audio.play();
    }

    // Remove this event listener so it doesn't play again on future clicks
    document.removeEventListener("click", playOnce);
});