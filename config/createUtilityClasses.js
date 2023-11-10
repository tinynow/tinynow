const fs = require('fs/promises');
const readFile = require('./readFile');
const utilityNamesAndProperties = {
    color: {
        'background-color': 'bg',
        'color': 'text',
        'border-color': 'border',
    },
    length: {
        'padding': 'pa',
        'padding-inline': 'pa-x',
        'padding-block': 'pa-y',
        'padding-inline-start': 'pa-left',
        'padding-inline-end': 'pa-right',
        'padding-block-start': 'pa-top',
        'padding-block-end': 'pa-bottom',
        'margin-inline': 'ma-x',
        'margin-block': 'ma-y',
        'margin-inline-start': 'ma-left',
        'margin-inline-end': 'ma-right',
        'margin-block-start': 'ma-top',
        'margin-block-end': 'ma-bottom',
        'gap': 'gap',
        'column-gap': 'col-gap',
        'row-gap': 'row-gap',
    }
};

module.exports = async function createUtilityClasses({ dir }) {
    const tokenText = await readFile(`${dir.input}/_data/tokens.json`);
    const tokens = JSON.parse(tokenText);
    Object.entries(utilityNamesAndProperties).forEach(([group, properties]) => {
        const css = Object.entries(properties).map(([property, prefix]) => {
            return Object.entries(tokens[group]).map(([tokenName, tokenValue]) => {
                const shortTokenName = tokenName.replace('--', '');
                const className = `.${prefix}-${shortTokenName}`;
                return `${className} { ${property}: var(${tokenName}) }`;
            }).join('\n');
        }).join('\n');
        fs.writeFile(`${dir.input}/styles/generated/_${group}.css`, css);
    });
    // const fileContents = Object.entries(tokens[group]).map(([property, value]) => { 
    //     const classPrefix = 
    // fs.writeFile(`${dir.input}/styles/${filename}`, utilityClasses);
};