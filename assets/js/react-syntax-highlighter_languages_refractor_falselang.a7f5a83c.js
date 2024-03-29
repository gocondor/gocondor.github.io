"use strict";
exports.id = 6174;
exports.ids = [6174];
exports.modules = {

/***/ 90618:
/***/ ((module) => {



module.exports = $false
$false.displayName = '$false'
$false.aliases = []
function $false(Prism) {
  ;(function (Prism) {
    /**
     * Based on the manual by Wouter van Oortmerssen.
     *
     * @see {@link https://github.com/PrismJS/prism/issues/2801#issue-829717504}
     */
    Prism.languages['false'] = {
      comment: {
        pattern: /\{[^}]*\}/
      },
      string: {
        pattern: /"[^"]*"/,
        greedy: true
      },
      'character-code': {
        pattern: /'(?:[^\r]|\r\n?)/,
        alias: 'number'
      },
      'assembler-code': {
        pattern: /\d+`/,
        alias: 'important'
      },
      number: /\d+/,
      operator: /[-!#$%&'*+,./:;=>?@\\^_`|~ßø]/,
      punctuation: /\[|\]/,
      variable: /[a-z]/,
      'non-standard': {
        pattern: /[()<BDO®]/,
        alias: 'bold'
      }
    }
  })(Prism)
}


/***/ })

};
;