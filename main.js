import { tokens } from './tokens.js';
import { combos } from './combos.js';
import { $, $$ } from './functions/domUtilities.js';

const swatchTemplate = $('#color-swatch');
const container = $('#color-swatch-container');

const colors = Object.entries(tokens).filter(([key]) => key.indexOf('--color') === 0).map(([key]) => key);

colors.push('transparent');
const parts = [
    '--background-color',
    '--can-top-fill',
    '--can-sides-fill',
    '--can-stroke',
    '--cloud-fill',
    '--cloud-stroke'
];
console.log(colors);
const colorCombos = combos.map(combo => {
    return combo.map(index => colors[index]);
});
console.log(colorCombos);
colorCombos.forEach(combo => {
    const swatch = swatchTemplate.content.cloneNode(true);
    const logo = swatch.querySelector('.logo');
    parts.forEach((part, index) => {
        logo.style.setProperty(
            part,
            `var(${[combo[index]]})`
        );
    });
    container.appendChild(swatch);
});

