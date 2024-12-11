let hsTable = document.getElementById("high-scores");
let lsTable = document.getElementById("last-score");
print_highscores();
print_last_score();

function print_highscores() {
    let highScores = localStorage.getItem("highScores");
    if (highScores) highScores = JSON.parse(highScores);
    else highScores = [];

    for (let highScore of highScores) {
        print_highscore(highScore);
    }
}

function print_highscore(highscore) {
    let row = document.createElement("tr");
    let cellName = document.createElement("td");
    let cellScore = document.createElement("td");

    cellName.textContent = highscore[1];
    cellScore.textContent = highscore[0];

    row.appendChild(cellName);
    row.appendChild(cellScore);

    hsTable.appendChild(row);
}

function print_last_score() {
    let lastScore = localStorage.getItem("lastScore");
    if (lastScore) lastScore = JSON.parse(lastScore);
    else lastScore = []

    let row = document.createElement("tr");
    let cellName = document.createElement("td");
    let cellScore = document.createElement("td");

    cellName.textContent = lastScore[1];
    cellScore.textContent = lastScore[0];

    row.appendChild(cellName);
    row.appendChild(cellScore);

    lsTable.appendChild(row);
}

function back_to_homepage() {
    document.location.href = "index.html";
}