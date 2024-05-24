document.getElementById("forma-de-contato").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio real do formulário.

    // Esconde o formulário.
    document.getElementById("forma-de-contato").classList.add("esconder");

    // Mostra a mensagem de sucesso.
    document.getElementById("mensagem-de-sucesso").classList.remove("esconder");
});