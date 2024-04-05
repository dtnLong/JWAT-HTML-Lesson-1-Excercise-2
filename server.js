const express = require('express')
const server = express()

/* route requests for static files to appropriate directory */
server.use('/styles', express.static(__dirname + '/styles'))
server.use('/assets', express.static(__dirname + '/assets'))
server.use('/scripts', express.static(__dirname + '/scripts'))

server.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

const port = 3000;
server.listen(port, function() {
  console.log('Server listening on port ' + port)
})