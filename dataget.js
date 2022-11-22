import fs from 'fs/promises'

export async function readFile() {
    try {
      const data = await fs.readFile('./data.json', { encoding: 'utf8' });
      return data
    } catch (e) {
      console.log(e);
    }
  }

export async function writeFile(content) {
  try {
    // read file, parse json, append incoming request to array, write file
    const readData = await fs.readFile('./data.json', { encoding: 'utf8' });
    const parseReadData = JSON.parse(readData)
    console.log(parseReadData.fizzbuzz)

    const newItem = JSON.parse(content)
    console.log(newItem)
    const newData = [...parseReadData, newItem]
    console.log(newData)

    
    const data = await fs.writeFile('./data.json', JSON.stringify(newData));
    return data
  } catch (e) {
    console.log(e);
  }
}
