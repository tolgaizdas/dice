let random1, random2;


function printWinner() {
  if (random1 > random2) {
    document.querySelector("h1.main-heading").innerHTML = "<i class='fas fa-flag winner-icon'></i>" + " Player 1 Wins!";
  } else if (random1 < random2) {
    document.querySelector("h1.main-heading").innerHTML = "Player 2 Wins! " + "<i class='fas fa-flag winner-icon'></i>";
  } else {
    document.querySelector("h1.main-heading").innerHTML = "<i class='fas fa-flag winner-icon'></i>" + " Draw! " + "<i class='fas fa-flag winner-icon'></i>";
  }
}

function changeImages() {
  document.querySelector("img.first-dice").setAttribute("src", "images/dice" + random1 + ".png");
  document.querySelector("img.second-dice").setAttribute("src", "images/dice" + random2 + ".png");
}

function dice() {
  random1 = Math.floor(Math.random() * 6) + 1;
  random2 = Math.floor(Math.random() * 6) + 1;
}

function main() {
  dice();
  changeImages();
  printWinner();
}

if (performance.navigation.type == 1) {
  main();
  console.info("This page is reloaded");
}

console.log("js completed.");
