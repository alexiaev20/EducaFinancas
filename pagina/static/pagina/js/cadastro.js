lucide.createIcons();

const signinBtn = document.querySelector("#sign-in-btn"),
signupBtn = document.querySelector("#sign-up-btn"),
container = document.querySelector(".container");
const signinBtn2 = document.querySelector("#sign-in-btn2"),
signupBtn2 = document.querySelector("#sign-up-btn2");

signupBtn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

signinBtn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

signupBtn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});

signinBtn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});

// Seleciona o ícone e o campo de data
const calendarIcon = document.getElementById('calendar-icon');
const dateInput = document.getElementById('data_nascimento');
 
// Ao clicar no ícone, ativa o campo de input de data
calendarIcon.addEventListener('click', function() {
    dateInput.focus();  // Mostra o calendário (funcionalidade disponível em navegadores compatíveis)
});
