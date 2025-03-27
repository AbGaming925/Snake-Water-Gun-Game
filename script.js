function playGame(userChoice) {
    let choices = { 's': "Snake 🐍", 'w': "Water 💧", 'g': "Gun 🔫" };
    let computerChoices = ['s', 'w', 'g'];
    let computerChoice = computerChoices[Math.floor(Math.random() * 3)];

    document.getElementById("userChoice").innerText = choices[userChoice];
    document.getElementById("computerChoice").innerText = choices[computerChoice];

    let result = getResult(userChoice, computerChoice);
    document.getElementById("gameResult").innerText = result;
}

function getResult(user, computer) {
    if (user === computer) return "It's a Draw! 😃";
    if ((user === 's' && computer === 'w') || 
        (user === 'w' && computer === 'g') || 
        (user === 'g' && computer === 's')) {
        return "You Win! 🥳";
    }
    return "You Lose! ☹";
}

function resetGame() {
    document.getElementById("userChoice").innerText = "";
    document.getElementById("computerChoice").innerText = "";
    document.getElementById("gameResult").innerText = "";
}