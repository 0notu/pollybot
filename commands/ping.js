module.exports = {
    "run": (bot, msg, args) => {
        msg.reply(`Pong! | ${Math.round(bot.ws.ping)} ms`)
    },
    "help": {
        "command": "ping",
        "return": "Pong! | <ms response time>",
        "args": null,
        "description": "Bot response time"
    }
}