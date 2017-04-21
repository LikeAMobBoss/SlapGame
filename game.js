var healthbar = document.getElementById("healthbar")
var health = 100
var hits = 0

function updateScreen() {
  if (health <= 0) {
    health = 0
  }
  document.getElementById("hits").innerHTML = hits
  healthbar.innerHTML = health
}


function reset() {
  health = 100
  hits = 0
  updateScreen()
}
function slap() {
  health -= 1
  hits++
  updateScreen()
}


function normalSlap() {
  health -= 5
  hits++
  updateScreen()
}


function slapHimSilly() {
  health -= 10
  hits++
  updateScreen()
}

updateScreen()

