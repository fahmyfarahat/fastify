const fastify = require("fastify")({ logger: true });

fastify.get("/", () => "Hello World from the server!");

fastify.get("/test", async () => {
  // Pretend to do some work
  await new Promise((r) => setTimeout(r, 1000));

  // Return result
  return { hello: "worldss" };
});

fastify.listen(8081);
