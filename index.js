// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
});

const path = require('path');
require('./redis');

// Declare a route
fastify.get('/', (request, reply) => {
  reply.send({ Scoreboard_API: 'Use routes GET, POST & PUT.' })
});

fastify.register(require('./Routes/scoreboard'));


// Run the server!
fastify.listen(process.env.PORT, '0.0.0.0', function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})