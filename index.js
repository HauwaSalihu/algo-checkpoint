function checkSentence(sentence) {
  // Initialize counters
  let charCount = 0;
  let wordCount = 0;
  let vowelCount = 0;

  // Define vowels
  const vowels = "aeiouAEIOU";

  // Iterate over each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    // Increment character count for every character except the final period
    if (char !== ".") {
      charCount++;
    }

    // Increment word count when encountering a space
    if (char === " " && i > 0 && sentence[i - 1] !== " ") {
      wordCount++;
    }

    // Increment vowel count if the character is a vowel
    if (vowels.includes(char)) {
      vowelCount++;
    }

    // Break loop when the period is encountered (end of sentence)
    if (char === ".") {
      // Increment word count for the last word (after the final space)
      wordCount++;
      break;
    }
  }

  // Output the results
  console.log(`number of characters in the sentence: ${charCount}`);
  console.log(`Number of words: ${wordCount}`);
  console.log(`Number of vowels: ${vowelCount}`);
}

// Example usage
let sentence = "Hello world this is a test sentence.";
checkSentence(sentence);
