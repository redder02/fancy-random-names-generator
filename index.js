const adjectives = require("./adjectives");
const nouns = require("./nouns");

const connectors = ["_", "-", ".", ""];

function getRandomName() {
    const adjective =
        adjectives[Math.floor(Math.random() * adjectives.length)];

    const noun =
        nouns[Math.floor(Math.random() * nouns.length)];

    const connector =
        connectors[Math.floor(Math.random() * connectors.length)];

    return `${adjective}${connector}${noun}`;
}

module.exports = {
    getRandomName,
    adjectives,
    nouns,
    connectors
};
