// SECTION VARIABLES

let homeScore = 0;

let awayScore = 0;

// !SECTION VARIABLES

// SECTION FUNCTIONS
console.log(homeScore)
function scoreChange(points, team) {
  // console.log('Button works bruh');
  // const newScore = document.getElementById("home-score")
  if (team == "home" && homeScore <= 0 && points == -1) {
    homeScore = 0
    console.log("Can't go lower than 0");
    return
  } else if (team == 'home') {
    homeScore += points
    console.log('homeScore ' + homeScore);
    return
  }
  if (team == "away" && awayScore <= 0 && points == -1) {
    awayScore = 0
    console.log("Can't go lower than 0");
    return
  } else if (team == 'away') {
    awayScore += points
    console.log('awayScore' + awayScore);
    return
  }

}

// !SECTION FUNCTIONS