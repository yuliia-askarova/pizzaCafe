import fastify from "fastify";
import fastifyStatic from '@fastify/static';
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import Pizza from "./model/Pizza.js";
import Drinks from './model/Drinks.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const server = fastify();

server.register(fastifyStatic, {
  root: join(__dirname, "../dist"),
});

server.setNotFoundHandler((_, relply) => {
  return relply.sendFile('index.html');
});

const port = process.env.PORT || 9000;
const host = process.env.HOST || '127.0.0.1';

mongoose
  .connect(
    "mongodb+srv://lastsong428:fCrVC6eanYNHSzSi@cluster0.keibgqn.mongodb.net/"
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("error:", err);
  });

server.get("/pizza", async (request, reply) => {
  console.log(111);
  try {
    const pizza = await Pizza.find();
    return reply.send(pizza);
  } catch (error) {
    reply.status(500).send({ error: "Database error" });
  }
});

server.get("/drinks", async (request, reply) => {
  try {
    const drinks = await Drinks.find();
    return reply.send(drinks);
  } catch (error) {
    reply.status(500).send({ error: "Database error" });
  }
});

server.listen({ port, host  }, (err, address) => {
  if (err) throw err;
  console.log(`server started at: ${address}`);
});
