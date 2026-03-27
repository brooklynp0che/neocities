function playClickSound() {
    const audio = document.getElementById("click");
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log("audio play failed:", e));
    }
}

function changeScreen(screenID) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(screenID).classList.remove('hidden');
}