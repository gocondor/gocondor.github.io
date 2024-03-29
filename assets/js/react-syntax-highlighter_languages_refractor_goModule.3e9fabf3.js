"use strict";
exports.id = 3152;
exports.ids = [3152];
exports.modules = {

/***/ 20222:
/***/ ((module) => {



module.exports = goModule
goModule.displayName = 'goModule'
goModule.aliases = []
function goModule(Prism) {
  // https://go.dev/ref/mod#go-mod-file-module
  Prism.languages['go-mod'] = Prism.languages['go-module'] = {
    comment: {
      pattern: /\/\/.*/,
      greedy: true
    },
    version: {
      pattern: /(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,
      lookbehind: true,
      alias: 'number'
    },
    'go-version': {
      pattern: /((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,
      lookbehind: true,
      alias: 'number'
    },
    keyword: {
      pattern: /^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,
      lookbehind: true
    },
    operator: /=>/,
    punctuation: /[()[\],]/
  }
}


/***/ })

};
;