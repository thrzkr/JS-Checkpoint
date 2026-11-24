// Build a pyramid-like output from a sentence by printing
// the first 1 word, then the first 2 words, and so on.
function sentencePyramid(sentence) {
    // Remove extra spaces so each word is treated correctly.
    const words = sentence.split(" ").filter((w) => w !== "");

    // Print progressively longer prefixes of the sentence.
    for (let i = 1; i <= words.length; i++) {
        console.log(words.slice(0, i).join(" ")); // First i words
    }
}

// Example sentence to display.
sentencePyramid("This is a simple sentence pyramid")