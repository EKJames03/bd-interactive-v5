async function sendData() {
    const data = {};
    const msg=document.getElementById("statusMsg");
    for (let i = 1; i <= 12; i++) {
        let id = "bulle_" + String(i).padStart(2,'0');
        let el = document.getElementById(id);
        if (el) data[id] = el.value.trim();
    }
    msg.innerText="Envoi...";
    msg.style.color="#007bff";

    try{
        let response=await fetch(https://script.google.com/macros/s/AKfycby2dzC6sXVFV1d5bIguYT_3K1ea72dGCyj3LsvBsJdecKC67oeQTiR28IYdkG1HCMXZbA/exec,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        });
        let text=await response.text();
        msg.innerText="Envoyé ✔";
        msg.style.color="green";
    }catch(err){
        msg.innerText="Erreur : "+err;
        msg.style.color="red";
    }
}
