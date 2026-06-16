function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

// alert(pow(2, 3)); // 8
console.log(pow(2, 2));
console.log(pow(2, 3));
console.log(pow(2, 4));

function capitalize(letter) {
  let splitValue = letter.split("");

  let value = splitValue[0].toUpperCase();
  let format = letter.split("").with(0, value).join("");

  return format;
}

function reverseString(letter) {
  let addedLength = letter.length;
  let arr = [];

  let str;

  for (let i = addedLength; i >= 0; i--) {
    if (i === -1) {
      break;
    }

    arr.push(letter[i]);

    arr.join(",");

    str = arr.join("");
  }
  console.log(str);
}

const Calculator = {
  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },

  divide: function (a, b) {
    return a / b;
  },

  multiply: function (a, b) {
    return a * b;
  },
};

// console.log(Calculator.add(5, 4));
// console.log(Calculator.divide(5, 4));
// console.log(Calculator.multiply(5, 4));
// console.log(Calculator.subtract(5, 4));

// console.log(reverseString("coding"));
// reverseString("coding");
// reverseString("classy");
// reverseString("beautiful");
// reverseString("mma");
// reverseString("The beautiful black dog");

// console.log(capitalize("mma"));
// console.log(capitalize("beautiful"));
// console.log(capitalize("value"));
// console.log(capitalize("coding"));
// console.log(capitalize("the white dog sat on the blue fence"));

// module.exports = capitalize;
