
async function sendData() {
    const data = {};
    for (let i = 1; i <= 8; i++) {
        data["bulle_0" + i] = document.getElementById("bulle_0" + i).value.trim();
    }

    const msg = document.getElementById("statusMsg");
    msg.innerText = "Envoi en cours...";
    msg.style.color = "#007bff";

    try {
        let response = await fetch("https://script.google.com/macros/s/AKfycby2dzC6sXVFV1d5bIguYT_3K1ea72dGCyj3LsvBsJdecKC67oeQTiR28IYdkG1HCMXZbA/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json
            },
            body: JSON.stringify(data)
        });
        let text = await response.text();
        msg.innerText = "Envoyé avec succès ✔";
        msg.style.color = "green";
    } catch(err) {
        msg.innerText = "Erreur : " + err;
        msg.style.color = "red";
    }
}
