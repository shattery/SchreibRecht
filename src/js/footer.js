        // Dynamisches Jahr in das Element einfügen
        const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }