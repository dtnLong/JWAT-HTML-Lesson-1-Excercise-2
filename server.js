const express = require('express')
const server = express()

/* route requests for static files to appropriate directory */
server.use('/styles', express.static(__dirname + '/styles'))
server.use('/assets', express.static(__dirname + '/assets'))

server.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

const port = 3000;
server.listen(port, function() {
  console.log('server listening on port ' + port)
})