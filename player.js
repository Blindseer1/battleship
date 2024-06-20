const GameBoard = require('./gameboard')

const Player = () => {
  this.gb = GameBoard();
  return { gb: this.gb }
}



module.exports = Player
