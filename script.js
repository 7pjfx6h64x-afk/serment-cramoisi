function activerSerment() {
    document.body.classList.add("lune-rouge");
    document.getElementById("message").innerHTML =
        "<span class='maudit'>🩸 LE SERMENT EST ÉVEILLÉ 🩸</span><br><br>" +
        "L’agent dormant obéit désormais au Maître.";
}

function verifierMotDePasse() {
    const mdp = document.getElementById("mdp").value;
    if (mdp === "lunerouge") {
        window.location.href = "secret.html";
    } else {
        alert("Accès refusé. Le sang n’est pas digne.");
    }
}
