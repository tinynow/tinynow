const fs = require('fs/promises');

module.exports = async function readFile(path) {
    try {
        const data = await fs.readFile(path, { encoding: 'utf8' });
        return data;
    } catch (err) {
        console.log(err);
    }
}