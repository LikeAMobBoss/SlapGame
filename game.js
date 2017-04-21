var healthbar = document.getElementById("healthbar")
var health = 100

function updateScreen(){
  
healthbar.innerHTML=health
}

function slap(){
health -= 1 
updateScreen()
}


function normalSlap(){
health -= 5
updateScreen()
}


function slapHimSilly(){
health -= 10
updateScreen()
}

updateScreen()

