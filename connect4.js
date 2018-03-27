let gameField = new Array();
let board = document.getElementById("game-table");
let currCol;
let currRow;
let currPlayer;
const player1 = 1;
const player2 = 2;

newgame();

/*function that creates the 6x7 board
2D array, each index with a number in it representing the 'value' of that position
0 - empty
1 - player1
2 - player2
*/
function prepareField(){
  gameField = new Array();
  for(let row = 0; row < 6; row++){
    gameField[row] = new Array();
    for(let col = 0; col < 7; col++){
      gameField[row].push(0);
    }
  }
}

/*initialize the board and starts a new game.
  randNum = randommize who goes first
*/
function newGame(){
  prepareField();
  let randNum = (Math.floor(Math.random() * 2) + 1);
  placeDisc(randNum);
}

//function that places the disc in its respective position but doesn't display on screen
function placeDisc(row,col){
  // TODO:
}

//function that creates the disc
function makeDisc(player){
  // TODO:
}
