import { readFile, writeFile } from "../dataget.js";

export const getItem = async (req, reply) => {
  try {
    const { id } = req.params;
    const data = await readFile();
    const parseData = JSON.parse(data);
    const item = parseData.find((it) => (it.fizzbuzz_id = id));
    return reply.send(item);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export const getItems = async (req, reply) => {
  try {
    const data = await readFile();
    const parseData = JSON.parse(data);
    return reply.send(parseData);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export const addItem = async (req, reply) => {
  const user_agent = req.headers["user-agent"];
  const ts = new Date().toISOString();
  const obj = {
    fizzbuzz_id: req.body.fizzbuzz_id,
    message: req.body.message,
    useragent: user_agent,
    creation_date: ts,
  };

  try {
    const writeToFile = await writeFile(JSON.stringify(obj));
    return reply.code(201).send(obj);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
