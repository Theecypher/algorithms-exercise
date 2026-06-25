const alphabet = "abcdefghijklmnopqrstuvwxyz";

// function caesarCipher(str, shiftparam) {
//   let test = str.split("");
//   let arr = [];

//   for (let i = 0; i < test.length; i++) {
//     // console.log(newIndex);

//     const newIndex = alphabet.indexOf(str[i]) + (shiftparam - 1);
//     const found = alphabet[newIndex];
//     arr.push(found);

//     // console.log({oldIndex, newIndex});
//   }

//   console.log(arr.join(""));
// }

// caesarCipher("xyz", 3);
// caesarCipher("hello", 4);
// caesarCipher("celine", 4);
// caesarCipher('Hello, World!', 3)

function shiftLetter(letter, shift) {
  const index = alphabet.indexOf(letter);
  const newIndex = (index + shift) % alphabet.length;

  return alphabet[newIndex];
}

function shiftChar(char, shift) {
  const isUpperCase = char !== char.toLowerCase();
  const lowerChar = (char = char.toLowerCase());

  if (!alphabet.includes(lowerChar)) {
    return char;
  }

  const shifted = shiftLetter(lowerChar, shift);
  return isUpperCase ? shifted.toLowerCase() : shifted;
}

function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
}
console.log(caesarCipher("hello", 3));
