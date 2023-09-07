/* Import tokens from CSS */
/* Single source of truth is the CSS */
// TODO: handle this in the build process

function getTokens() {
    const isSameDomain = (styleSheet) => {
        if (!styleSheet.href) {
            return true;
        }

        return styleSheet.href.indexOf(window.location.origin) === 0;
    };

    const isStyleRule = (rule) => rule.type === 1;

    const getCSSCustomProps = () =>
        [...document.styleSheets].filter(isSameDomain).reduce(
            (finalArr, sheet) =>
                finalArr.concat(
                    [...sheet.cssRules].filter(isStyleRule).reduce((propValArr, rule) => {
                        const props = [...rule.style]
                            .map((propName) => [
                                propName.trim(),
                                rule.style.getPropertyValue(propName).trim()
                            ])
                            .filter(([propName]) => propName.indexOf("--") === 0);

                        return [...propValArr, ...props];
                    }, [])
                ),
            []
        );
    const tokenEntries = getCSSCustomProps();
    // return an object with the tokens
    return tokenEntries.reduce((tokens, [propName, propValue]) => {
        return {
            ...tokens,
            [propName]: propValue
        };
    }, {});
}
const tokens = getTokens();
window.tokens = tokens;
export { tokens };
