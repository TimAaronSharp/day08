// SECTION VARIABLES

let homeScore = 0;

let awayScore = 0;

// !SECTION VARIABLES

// SECTION FUNCTIONS
console.log(homeScore)
function scoreChange(points, team) {
  if (team == "home" && homeScore <= 0 && points == -1) {
    homeScore = 0
    console.log("Can't go lower than 0");
    drawScore(team)
    return
  } else if (team == 'home') {
    homeScore += points
    console.log('homeScore ' + homeScore);
    drawScore(team)
    return
  }
  if (team == "away" && awayScore <= 0 && points == -1) {
    awayScore = 0
    console.log("Can't go lower than 0");
    drawScore(team)
    return
  } else if (team == 'away') {
    awayScore += points
    console.log('awayScore' + awayScore);
    drawScore(team)
    return
  }
}

function drawScore(team) {
  if (team == 'home') {
    const homeScoreElem = document.getElementById("home-score")
    homeScoreElem.innerText = homeScore
  } else {
    const awayScoreElem = document.getElementById("away-score")
    awayScoreElem.innerText = awayScore
  }
}

// !SECTION FUNCTIONS