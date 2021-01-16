const ketinu = require("../ketinu/src/src.js");

let secret = require('./secret.json')

let pollybot = new ketinu(secret)
pollybot.run()
