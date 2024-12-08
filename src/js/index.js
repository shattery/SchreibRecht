const words = ["L.R.S", "Schreiben", "Lesen"];
const baseTypingSpeed = 100; // Base typing speed in milliseconds
const baseDeletingSpeed = 50; // Base deleting speed in milliseconds
const wordPause = 1000; // Pause in milliseconds after a word is fully typed

let wordIndex = 0; // Tracks the current word
let charIndex = 0; // Tracks the current character-
let isTyping = true; // True if typing, false if deleting
let lastTime = 0; // Tracks the last animation frame time
const typingSpeeds = words.map(() => Math.random() * 50 + baseTypingSpeed); // Precomputed random typing speeds
const deletingSpeeds = words.map(() => Math.random() * 50 + baseDeletingSpeed); // Precomputed random deleting speeds

function getDisplayElement() {
  return document.getElementById('word-display');
}

function animateTyping(timestamp) {
    const displayElement = getDisplayElement();
    if (!displayElement) {
        // If the element is not found, wait and retry
        requestAnimationFrame(animateTyping);
        return;
    }

    // Calculate elapsed time since the last frame
    if (timestamp - lastTime < (isTyping ? typingSpeeds[wordIndex] : deletingSpeeds[wordIndex])) {
        requestAnimationFrame(animateTyping);
        return;
    }

    lastTime = timestamp; // Update lastTime

    if (isTyping) {
        // Typing logic
        if (charIndex < words[wordIndex].length) {
            displayElement.textContent += words[wordIndex][charIndex++];
        } else {
            isTyping = false; // Switch to deleting
            setTimeout(() => requestAnimationFrame(animateTyping), wordPause);
            return;
        }
    } else {
        // Deleting logic
        if (charIndex > 0) {
            displayElement.textContent = words[wordIndex].slice(0, --charIndex);
        } else {
            isTyping = true; // Switch to typing
            wordIndex = (wordIndex + 1) % words.length; // Loop to the first word
        }
    }

    // Request the next animation frame
    requestAnimationFrame(animateTyping);
}

// Start the typing animation
requestAnimationFrame(animateTyping);


/*const card = document.getElementById("interactive-card");

    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect(); // Position und Größe der Karte
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 15; // X-Offset
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 15; // Y-Offset

      card.style.transform = `rotateY(${x}deg) rotateX(${y * -1}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      // Karte zurücksetzen, wenn der Mauszeiger die Karte verlässt
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
    */
   