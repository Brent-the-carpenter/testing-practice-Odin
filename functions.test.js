const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./functions");
//1.  test for capitalize
test("takes a string and capatilizes first letter", () => {
  expect(capitalize("dog")).toBe("Dog");
});

// 2. test for reverseString
test("reverses the order of characters in a string", () => {
  expect(reverseString("cat")).toBe("tac");
});

test("makes sure strings eith spaces still are reversed", () => {
  expect(reverseString("cat dog")).toBe("god tac");
});
test("checks for empty string", () => {
  expect(() => reverseString("")).toThrow("argument empty");
});

// 3. calculator object
test("addition", () => {
  expect(calculator.add(4, 2)).toBe(6);
});

test("subtract", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});
test("multiply", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

test("Divide", () => {
  expect(calculator.divide(8, 4)).toBe(2);
});
test("division by zero", () => {
  expect(() => calculator.divide(4, 0)).toThrow("Cannot divide by zero");
});

//4. caesarcipher tests
test("caesarcipher shifts each charachter by the shift factor", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test(" works with spacing in string and puncuation", () => {
  expect(caesarCipher("hello dog!", 3)).toBe("khoor grj!");
});

// 5. analyzeArray
let object = analyzeArray([1, 8, 3, 4, 2, 6]);
test("gives min value for array ", () => {
  expect(object.min).toBe(1);
  expect(object.max).toBe(8);
  expect(object.average).toBe(4);
  expect(object.length).toBe(6);
});
