const sum = require("./sum");
const capitalize  = require("./algorithm")

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("capitilize coding to equal Coding", () => {
  expect(capitalize("coding")).toBe("Coding");
});
