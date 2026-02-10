interface ValidationState {
    isValid: boolean;
    emailMsg: string;
    passwordMsg: string;
}

const form = document.querySelector('#loginForm') as HTMLFormElement;
const emailInput = document.querySelector('#email') as HTMLInputElement;
const passwordInput = document.querySelector('#password') as HTMLInputElement;
const emailError = document.querySelector('#emailError') as HTMLSpanElement;
const passwordError = document.querySelector('#passwordError') as HTMLSpanElement;

const validate = (): ValidationState => {
    const email = emailInput.value;
    const password = passwordInput.value;
    
    let state: ValidationState = {
        isValid: true,
        emailMsg: "",
        passwordMsg: ""
    };

    if (!email.includes("@")) {
        state.emailMsg = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
        state.isValid = false;
    }

    if (password.length < 6) {
        state.passwordMsg = `Passwort zu kurz (min. 6 Zeichen, aktuell: ${password.length}).`;
        state.isValid = false;
    }

    return state;
};

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const result = validate();

    emailError.textContent = result.emailMsg;
    passwordError.textContent = result.passwordMsg;

    if (result.isValid) {
        console.log("Formular erfolgreich validiert!");
        alert("Anmeldung erfolgreich!");
    }
});
