const crypto = require('crypto');

function hashString(inputString, hashAlgorithm = 'sha256') {
    const hash = crypto.createHash(hashAlgorithm);
    hash.update(inputString, 'utf-8');
    return hash.digest('hex');
}

// Example usage:
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string to hash: ', (inputString) => {
    const hashedResult = hashString(inputString);
    console.log(`Hashed result using SHA-256: ${hashedResult}`);
    rl.close();
});
