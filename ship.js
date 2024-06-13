const Ship = (length) => {
  let ship = {}
  ship.length = length;
  ship.sunk;
  ship.hits = 0;

  ship.hit = () => {
    ship.hits++;
  }

  ship.isSunk = () => (ship.hits >= ship.length)


  return ship;

}

module.exports = Ship
