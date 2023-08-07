import { combos } from './combos.js'
import { tokens } from './tokens.js'
export function getColorPalette(tokens) {
    console.log(tokens);
    return Object.keys(tokens).filter((tokenName) => tokenName.indexOf('color-brand') > -1)
}

function setColors(el, scheme) {
    for (const property in scheme) {
        el.style.setProperty(property, `var(${scheme[property]})`);
    }
}


for (let i = 0; i < colorSchemes.length; i++) {
    const svg = example.cloneNode(true);
    setColors(svg, i);
    container.appendChild(svg);
}
