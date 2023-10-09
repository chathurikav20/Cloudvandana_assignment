//chathurika
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sortArrayDescending(inputArray) {
    return inputArray.sort((a, b) => b - a);
}

rl.question('Enter a list of numbers separated by spaces: ', (input) => {
    const inputArray = input.split(' ').map(Number).filter(number => !isNaN(number));

    if (inputArray.length === 0) {
        console.log('Invalid input. Please enter valid numbers separated by spaces.');
    } else {
        const sortedArray = sortArrayDescending(inputArray);
        console.log('Sorted Array (Descending Order):', sortedArray);
    }

    rl.close();
});
