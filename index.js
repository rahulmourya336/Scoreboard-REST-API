// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
});

const path = require('path');
// const PORT = process.env.PORT || 5000;

// Declare a route
fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
});

// Run the server!
fastify.listen(process.env.PORT || 5000, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${fastify.server.address().port}`)
});
