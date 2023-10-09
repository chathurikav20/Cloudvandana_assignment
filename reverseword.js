//chathurika
function reverseWordsInSentence(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Reverse each word and store them in an array
    const reversedWords = words.map(word => reverseWord(word));

    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
    // Convert the word into an array of characters, reverse it, and join it back
    return word.split('').reverse().join('');
}

// Get user input
const inputSentence = prompt('Enter a sentence:');

// Check if the user provided input
if (inputSentence !== null) {
    // Call the function to reverse words in the sentence
    const reversedSentence = reverseWordsInSentence(inputSentence);
    console.log(`Reversed Sentence: ${reversedSentence}`);
} else {
    console.log('No input provided.');
}
