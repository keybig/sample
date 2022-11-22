import { getItem, getItems, addItem, deleteItem, updateItem } from "../controllers/fizzcon.js";

const Item = {
  type: "object",
  properties: {
    fizzbuzz_id: { type: "string" },
    creation_date: { type: "string" },
    useragent: { type: "string"},
    message: { type: "string"}
  },
};

const Items = {
  type: "array",
  items: {
    type: "object",
    properties: {
      fizzbuzz_id: { type: "string" },
      creation_date: { type: "string" },
      useragent: { type: "string"},
      message: { type: "string"}
    },
  },
};

// Options

const getItemsOpts = {
  schema: {
    response: {
      200: Items,
    },
  },
  handler: getItems,
};

const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};

const postItemOpts = {
    schema: {
      body: {
        type: 'object',
        required: ['fizzbuzz_id', 'message'],
        properties: {
            fizzbuzz_id: { type: 'string'},
            //creation_date: { type: 'string'},
           // useragent: {type: 'string'},
            message: {type: 'string'}
        }
      },
      response: {
        201: Item,
      },
    },
    handler: addItem,
  };

  const deleteItemOpts = {
    schema: {
      response: {
        200: {
            type: 'object',
            properties: {
                message: {type: 'string'}
            }
        },
      },
    },
    handler: deleteItem,
  };

  const updateItemOpts = {
    schema: {
      response: {
        200: Items,
      },
    },
    handler: updateItem,
  };

async function fizzRoutes(fastify, options, done) {
  fastify.get("/fizzo", async (request, reply) => {
    return { hello: "world world world" };
  });

  fastify.get("/fizz/:id", getItemOpts);

  fastify.get("/fizz", getItemsOpts);

  fastify.post('/fizz', postItemOpts);

  fastify.delete('/fizz/:id', deleteItemOpts)

  fastify.put('/fizz/:id', updateItemOpts)
  done();
}

export default fizzRoutes;
