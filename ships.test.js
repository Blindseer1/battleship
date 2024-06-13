let Ship = require("./ship")



test("hit once", () => {
  let e = Ship();
  e.hit();
  expect(e.hits).toBe(1);
})

test("hit twice", () => {
  let e = Ship();
  e.hit(); e.hit();
  expect(e.hits).toBe(2);
})


test("should be sunk", () => {
  let e = Ship(3); e.hit(); e.hit(); e.hit();
  expect(e.isSunk()).toBe(true)
})
