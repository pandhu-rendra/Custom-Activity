const express = require('express');
const server = express();

server.all('/', (req, res,) => {
    res.send('Copy the url or link from webview and open https://uptimerobot.com/ create a new website there and paste the link from webview')
})

function keepAlive() {
    server.listen(3000, () => { console.log("Server is ready!!" + Date.now()) });
}

module.exports = keepAlive;
