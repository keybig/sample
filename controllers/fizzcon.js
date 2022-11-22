import { v4 as uuidv4 } from "uuid";
import { readFile, writeFile } from "../dataget.js";

export const getItem = async (req, reply) => {
  try {
    const { id } = req.params;
    const data = await readFile();
    const test = JSON.parse(data);
    const item = test.find((it) => (it.fizzbuzz_id = id));
    return reply.send(item);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export const getItems = async (req, reply) => {
  const useragent = req.headers["user-agent"];

  try {
    const data = await readFile();
    const test = JSON.parse(data);
    const go = JSON.stringify(test);
    return reply.send(test);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export const addItem = async (req, reply) => {
    const user_agent = req.headers["user-agent"];
    const ts = new Date().toISOString()
    
    const obj = {
        fizzbuzz_id: req.body.fizzbuzz_id,
        message: req.body.message,
        useragent: user_agent,
        creation_date: ts
    }
    try {
    const writeOut = await writeFile(JSON.stringify(obj));
    return reply.code(201).send(obj);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export const deleteItem = (req, reply) => {
  const { id } = req.params;
  items = items.filter((item) => item.id == id);
  reply.send({ message: `Item ${id} has been deleted` });
};

export const updateItem = (req, reply) => {
  const { id } = req.params;
  const { name } = req.body;

  const items = items.map((item) => {
    item.id === id ? { id, name } : item;
  });

  item = items.find((item) => item.id === id);

  reply.send(item);
};
