const css = require('css');
const fs = require('fs/promises');
const readFile = require('./readFile');

module.exports = async function copyTokensToJSON({ dir }) {
    const tokenFile = await readFile(`${dir.input}/styles/_tokens.css`);
    const tokenAst = css.parse(tokenFile);
    const rootRule = tokenAst.stylesheet.rules.find(rule => rule.selectors && rule.selectors.includes(':root'));
    // regex to get the text between < and > characters
    const regex = /(?<=<)(.*?)(?=>)/;
    // get all the groups from the comments
    let currentGroup = '';
    const tokens = rootRule.declarations.reduce((acc, declaration) => {
        if (declaration.type === 'comment') {
            const matches = declaration.comment.match(regex);
            if (matches) {
                currentGroup = matches[0];
                acc[currentGroup] = {};
            }
        }
        if (declaration.type === 'declaration' && declaration.property.startsWith('--')) {
            acc[currentGroup][declaration.property] = declaration.value;
        }
        return acc;
    }, {});
    fs.writeFile(`${dir.input}/${dir.data}/tokens.json`, JSON.stringify(tokens, null, 4));
};