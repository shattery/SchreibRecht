const card = document.getElementById("interactive-card");

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