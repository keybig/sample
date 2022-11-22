import fs from "fs/promises";

export async function readFile() {
  try {
    const data = await fs.readFile("./data.json", { encoding: "utf8" });
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function writeFile(content) {
  try {
    const readData = await fs.readFile("./data.json", { encoding: "utf8" });
    const parseReadData = JSON.parse(readData);
    const newItem = JSON.parse(content);
    const newData = [...parseReadData, newItem];
    const data = await fs.writeFile("./data.json", JSON.stringify(newData));
    return data;
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}
