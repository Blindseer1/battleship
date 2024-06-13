const GameBoard = require('./gameboard')

const Player = () => {
  const gb = GameBoard();
  return { gb }
}


module.exports = Player()
