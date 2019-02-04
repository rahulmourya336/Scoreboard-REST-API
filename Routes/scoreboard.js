async function routes (fastify, options) {
    fastify.get('/scoreboard', async (request, reply) => {
      return { hello: 'world' }
    })
  }
  
  module.exports = routes