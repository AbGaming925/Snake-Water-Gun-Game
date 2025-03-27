let gameHistory = [];

function playGame(userChoice) {
    // Disable buttons after selecting a choice
    document.querySelectorAll(".buttons button").forEach(btn => btn.disabled = true);

    let choices = { 's': "Snake 🐍", 'w': "Water 💧", 'g': "Gun 🔫" };
    let computerChoices = ['s', 'w', 'g'];
    let computerChoice = computerChoices[Math.floor(Math.random() * 3)];

    document.getElementById("userChoice").innerText = choices[userChoice];
    document.getElementById("computerChoice").innerText = choices[computerChoice];

    let result = getResult(userChoice, computerChoice);
    document.getElementById("gameResult").innerText = result;

    // Store the result in history
    saveGameHistory(choices[userChoice], choices[computerChoice], result);

    // Enable the play again button
    document.getElementById("playAgain").disabled = false;
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

function saveGameHistory(user, computer, result) {
    if (gameHistory.length >= 5) {
        gameHistory.pop(); // Remove the oldest entry if we exceed 5 results
    }
    
    gameHistory.unshift({ user, computer, result }); // Add latest result at the top
    updateHistoryTable();
}

function updateHistoryTable() {
    let historyTable = document.getElementById("historyTable");
    historyTable.innerHTML = ""; // Clear previous table

    gameHistory.forEach((game, index) => {
        let row = `<tr>
                    <td>${index + 1}</td>
                    <td>${game.user}</td>
                    <td>${game.computer}</td>
                    <td>${game.result}</td>
                  </tr>`;
        historyTable.innerHTML += row;
    });
}

function resetGame() {
    document.getElementById("userChoice").innerText = "";
    document.getElementById("computerChoice").innerText = "";
    document.getElementById("gameResult").innerText = "";

    // Enable buttons again
    document.querySelectorAll(".buttons button").forEach(btn => btn.disabled = false);

    // Disable play again button
    document.getElementById("playAgain").disabled = true;
}
