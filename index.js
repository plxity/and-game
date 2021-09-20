'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = andGame;

function andGame(elements, useSymbol = false) {
  if (!(elements instanceof Array) || typeof useSymbol !== 'boolean') {
    return '';
  }

  const elLength = elements.length;
  let result = '';
  elements.forEach((item, i) => {
    if (i === elLength - 1 && i != 0) {
      result += `${useSymbol ? ' & ' : 'and '}${item}.`;
    } else {
      result += `${item}${
        i === elLength - 1 ? '.' : i === elLength - 2 ? '' : ', '
      }`;
    }
  });
  return result;
}
