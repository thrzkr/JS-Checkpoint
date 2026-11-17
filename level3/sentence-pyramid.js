// Print progressively longer prefixes of a sentence, one line per level.
function sentencePyramid(sentence) {
  // Split the sentence into words so each level can add one more word.
  const words = sentence.split(" ");

  for (let i = 1; i <= words.length; i++) {
    // Take the first i words and join them back into the current row.
    console.log(words.slice(0, i).join(" "));
  }
}

// Example sentence to display.
sentencePyramid("This is a simple sentence pyramid")