
// ============== Declare gloabl variables==========================//

var targetScore
var score = 0
var wins = 0
var losses = 0

// calls the JQuery reset function. In this function all HTML elements are changed to randomized values as a starting point for the user//

function reset() {
    targetScore = Math.floor(Math.random() * 101) + 19
    $("#targetScore").text(targetScore)

    $("#winTotal").text(wins)
    $("#lossesTotal").text(losses)

    score = 0
    $("#score").text("Score: " + score)

    diamondPoints = Math.floor(Math.random() * 12) + 1
    emeraldPoints = Math.floor(Math.random() * 12) + 1
    rubyGemPoints = Math.floor(Math.random() * 12) + 1
    saphirePoints = Math.floor(Math.random() * 12) + 1
}

// adds the points

function addPoints(points) {
    score += points
    $("#score").text("Score: " + score)
    setTimeout(checkScore, 100)
}

// checks if you won or loss based on if the sum of the the score is equal to the randomly generated target score
function checkScore() {
    if (score === targetScore) {
        alert("You Win!")
        wins++
        reset()
    }
    if (score > targetScore) {
        alert("You lose!")
        losses++
        reset()
    }

    
}

// hooks onto clicking the html elmements to actually add the points to it's respective variable

$("#diamond").click(function () { addPoints(diamondPoints)} )
$("#emerald").click(function () { addPoints(emeraldPoints)} )
$("#ruby-gem").click(function () { addPoints(rubyGemPoints)} )
$("#saphire").click(function () { addPoints(saphirePoints)} )

reset()