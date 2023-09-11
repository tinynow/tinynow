const css = require('css');
const fs = require('fs/promises');
async function readFile(path) {
    try {
        const data = await fs.readFile(path, { encoding: 'utf8' });
        return data;
    } catch (err) {
        console.log(err);
    }
}

module.exports = async function copyTokensToJSON({ dir, runMode, outputMode }) {
    const tokenFile = await readFile(`${dir.input}/styles/_tokens.css`);
    const tokenAst = css.parse(tokenFile);
    const rootRule = tokenAst.stylesheet.rules.find(rule => rule.selectors && rule.selectors.includes(':root'));
    const tokenDeclarations = rootRule.declarations.filter(declaration => declaration.type === 'declaration' && declaration.property.startsWith('--'));
    const tokensObject = tokenDeclarations.reduce((acc, declaration) => {
        acc[declaration.property] = declaration.value;
        return acc;
    }, {});

    fs.writeFile(`${dir.data}/tokens.json`, JSON.stringify(tokensObject, null, 4));
};