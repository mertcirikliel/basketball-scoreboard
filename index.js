let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let hScore = 0
let gScore = 0

function addOneHome() {
    hScore = hScore + 1
    homeScore.textContent = hScore
}

function addTwoHome() {
    hScore = hScore + 2
    homeScore.textContent = hScore
}

function addThreeHome() {
    hScore = hScore + 3
    homeScore.textContent = hScore
}

function addOneGuest() {
    gScore = gScore + 1
    guestScore.textContent = gScore
}

function addTwoGuest() {
    gScore = gScore + 2
    guestScore.textContent = gScore
}

function addThreeGuest() {
    gScore = gScore + 3
    guestScore.textContent = gScore
}

function reset() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    gScore = 0
    hScore = 0
}