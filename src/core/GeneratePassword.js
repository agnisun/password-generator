import {setPassword} from "../features/generateSlice";

export const GeneratePassword = (strategies, passwordLength, dispatch) => {
  const charsLower = {
    value: "abcdefghijklmnopqrstuvwxyz",
    status: false,
  };
  const charsUpper = {
    value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    status: false,
  };
  const symbols = {
    value: "+-_=/;><)(*&^%$#@!,.?|{}[]",
    status: false,
  };
  const numbers = {
    value: "0123456789",
    status: false,
  };
  const password = [];
  
  for (let strategy of strategies) {
    if (strategy === "lowercase") {
      charsLower.status = true;
    } else if (strategy === "uppercase") {
      charsUpper.status = true;
    } else if (strategy === "symbols") {
      symbols.status = true;
    } else if (strategy === "numbers") {
      numbers.status = true;
    }
  }
  
  for (let i = 0; i < passwordLength; i++) {
    const lowerChar = charsLower.status
      ? shuffleLetters(charsLower.value).slice(0, 10)
      : "";
    const upperChar = charsUpper.status
      ? shuffleLetters(charsUpper.value).slice(0, 5)
      : "";
    const symbolChar = symbols.status
      ? shuffleLetters(symbols.value).slice(0, 5)
      : "";
    const numberChar = numbers.status
      ? shuffleLetters(numbers.value).slice(0, 5)
      : "";
    const resultChars = shuffleLetters(
      lowerChar + upperChar + symbolChar + numberChar
    )[0];
    password.push(resultChars);
  }
  
  function shuffleLetters(str) {
    let a = str.split(""),
      n = a.length;
    
    for (let i = n - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    
    return a.join("");
  }
  
  dispatch(setPassword(password.join("")));
};