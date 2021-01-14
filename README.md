<div align="center">

# Instagram Phishing Demo

![Learn goal](https://img.shields.io/badge/Learn-Phising-blueviolet) ![Minimum PHP Version](https://img.shields.io/badge/PHP--version-%3E%3Dv7.4-blue) ![](https://img.shields.io/npm/v/react) ![Status](https://img.shields.io/badge/Status-Draft-yellow)

This repository is a challenge : create a fake Instagram login page to grab authentication data from all users who fill and submit the form.

The code here isn't the best way to do that but it work also.
</div>

## Disclamer
I'm not responsible for your actions. The code provided here is for educational purpose only.

## How to run
Simply, you must have to enter the following commands:
```
# To install dependencies
npm install

# To run the servers
npm run server
```
Two services will be runned :
- **FakeLogin** (on port 3000)
- **Listener** (on port 8000)

Go to *http://localhost:3000/*, fill the form and submit. The data will be sniffed and a json file will created inside the folder *./php/output*.