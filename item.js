const fs = require('fs/promises');
const path = require('path');

const filePath = path.join(__dirname, 'items.json');

async function getStoredItems() {
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
}



module.exports = { getStoredItems };

 