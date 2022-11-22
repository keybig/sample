import Fastify from "fastify";
import fizzRoutes from "./routes/fizz.js";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

const fastify = new Fastify({
  logger: true,
});

await fastify.register(fastifySwagger);

await fastify.register(fastifySwaggerUi);

await fastify.register(fizzRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
