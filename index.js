let attempts = 0;
let randomNum = 0;
let p = 0; // Nombre maximum d'essais
const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const replay = document.getElementById("rejouer");
const message = document.getElementById("message");
const fac = document.getElementById("facile");
const moy = document.getElementById("moyen");
const dif = document.getElementById("difficile");

fac.addEventListener("click", () => setDifficulty(3, 10)); 
moy.addEventListener("click", () => setDifficulty(2, 50)); 
dif.addEventListener("click", () => setDifficulty(1, 100)); 

submit.addEventListener("click", checkGuess);
replay.addEventListener("click", resetGame);

function setDifficulty(maxAttempts, maxNumber) {
    p = maxAttempts;
    randomNum = Math.floor(Math.random() * maxNumber + 1);
    attempts = 0; // Réinitialise les tentatives
    message.textContent = `Difficulté définie. Vous avez ${p} tentative(s) pour deviner un nombre entre 1 et ${maxNumber}.`;
    guess.disabled = false;
    submit.style.display = "inline-block";
    replay.style.display = "none";
}

function checkGuess() {
    const userValue = Number(guess.value);
    attempts++;

    if (userValue === randomNum) {
        message.innerHTML = "Félicitation! Tu as gagné!";
        endGame();
    } else if (userValue < randomNum) {
        message.innerHTML = "Ton chiffre est trop bas.";
    } else {
        message.innerHTML = "Ton chiffre est trop haut.";
    }

    if (attempts >= p) {
        if (userValue !== randomNum) {
            message.textContent = `Vous avez dépassé le nombre d'essais autorisés ! Le nombre était ${randomNum}.`;
        }
        endGame();
    } else {
        const remainingAttempts = p - attempts;
        message.textContent += ` Il vous reste ${remainingAttempts} tentative(s).`;
    }
}

function endGame() {
    submit.style.display = "none";
    replay.style.display = "inline-block";
    guess.disabled = true;
}

function resetGame() {
    attempts = 0;
    randomNum = 0;
    p = 0;
    message.textContent = "Choisissez une difficulté pour commencer.";
    guess.value = "";
    guess.disabled = true;
    submit.style.display = "none";
    replay.style.display = "none";
}