const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");
const button = document.getElementById("submit-btn");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    button.disabled = true;
    button.textContent = "Odosielam...";
    message.textContent = "";

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            message.textContent = "Správa bola úspešne odoslaná! Ďakujem za kontaktovanie.";
            message.className = "success";
            form.reset();
        } else {
            message.textContent = "Správu sa nepodarilo odoslať. Skús to znova.";
            message.className = "error";
        }

    } catch (error) {
        message.textContent = "Nastala chyba pripojenia. Skús to znova.";
        message.className = "error";
    }

    button.disabled = false;
    button.textContent = "Odoslať správu →";
});