const button = document.getElementById('animate-btn');
const airplane = document.getElementById('airplane-img');
const bomb = document.getElementById('bomb-img');

button.addEventListener('click', function() {
    // Reset airplane animation
    airplane.classList.remove('animate');
    void airplane.offsetWidth; // Reset animation
    airplane.classList.add('animate');

    // When the airplane animation starts, position the bomb
    airplane.addEventListener('animationstart', () => {
        bomb.style.visibility = 'visible'; // Make bomb visible as the animation starts
    });

    // Start bomb falling animation after a slight delay
    setTimeout(() => {
        bomb.classList.add('falling'); // Trigger the falling animation
    }, 4700); // Delay the bomb's fall to sync with the airplane's motion
});
