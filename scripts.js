const text = "hello there hello hello there hi how are you hello";

// using key/value pairs
function wordCounterWithObjects(text) {
  const wordArray = text.split(" ");
  const wordCounter = {}; // this is our key value pair. We can access the values of certain keys by calling wordCounter.keyName or wordCounter["keyName"]
  wordArray.forEach(function (word) {
    if (!wordCounter[word]) {
      // here we are checking if we have already counted this word at least one time
      wordCounter[word] = 1; // if this word does not exist in our object, we want to add it to the object. This will add a key to the object of whatever word we are currently on in our loop, and set it's initial value to 1.
    } else {
      wordCounter[word] += 1; // if this word already exists in our object, we don't want to redefine anything, so we can simply take the value it currently has, and add 1 to it
    }
  });
  return wordCounter;
}

function countWord(word, text) {
  const textArray = text.split(" ");
  let count = 0;
  textArray.forEach(function (element) {
    if (element === word) {
      count += 1;
    }
  });
  return count;
}

function countAllWords(text) {
  const textArray = text.split(" ");
  const checkedWords = []; // we don't need to count the same word more than once, so we will use this array to store all words that we have checked
  textArray.forEach(function (word) {
    if (!checkedWords.includes(word)) {
      // checking if we have already counted this specific word by using the .includes method. the "!" character will check if the opposite of the condition is true, so rather than checking if the array includes the word, we are checking if it doesn't include the word. If it doesn't, it means we haven't checked it, so we can proceed to the logic below
      const wordOccurrences = countWord(word, text);
      checkedWords.push(word); // after we counted the word, we push it to the checkedWords array so we won't need to count it again

      // After we run "countWords", we can basically do anything we want with the "word" and "wordOccurrences" variables. In this case we are just going to append them to the DOM
      const p = document.createElement("p");
      p.innerText = word + ": " + wordOccurrences; // this line creates the string that gets added to the DOM. It will look like this: "hello: 3"
      document.querySelector("body").append(p);
    }
  });
}

console.log(wordCounterWithObjects(text)); // this will just console.log the object

countAllWords(text); // this will append to DOM
