let gameField = new Array();
let board = document.getElementById("game-table");
let currentCol;
let currentRow;
let currentPlayer;
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
  for(let rpw=0; row<6; row++){
    gameField[row] = new Array();
    for(let col=0; col<7; col++){
      gameField[row].push(0);
    }
  }
}
/*initialize the board and starts a new game.
  randNum = randommize who goes first
*/
function newgame(){
  prepareField();
  let randNum = (Math.floor(Math.random()*2)+1);
}
