const Cursor = require('./cursor');
const Screen = require('./screen')

class TTT {

  constructor(){
    this.playerTurn = "O";
    this.grid = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    this.cursor = new Cursor();
    Screen.initialized = true;
    Screen.gridLines = true;
    Screen.message = "Player O's turn";
    Screen.backgroundColors = "\u001b[43m";
    // Screen.backgroundColors.cursor.col = "\u001b[43m";
  }



}

module.exports = TTT
