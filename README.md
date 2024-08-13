# Fancy Random Names

![npm version](https://img.shields.io/npm/v/fancy-random-names)
![npm downloads](https://img.shields.io/npm/dm/fancy-random-names)
![license](https://img.shields.io/npm/l/fancy-random-names)

**Fancy Random Names** is an npm package that provides a collection of over 700 unique, stylish, and fancy names. Whether you're looking for names for characters, projects, or just for fun, this package has you covered!

## Installation

Install the package via npm:

```bash
npm install fancy-random-names
```
## Usage
```bash

const { getRandomName, getNRandomNames, names } = require('fancy-random-names');

// Generate one random fancy name
console.log(getRandomName()); # Outputs a random fancy name

// Generate N random facncy names
console.log(getNRandomNames(n)); # Outputs n random fancy names 0<=n<=700

# Get the full list of names
console.log(names); # Outputs the full array of 700+ names
```
