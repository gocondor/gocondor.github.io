"use strict";
exports.id = 9389;
exports.ids = [9389];
exports.modules = {

/***/ 13808:
/***/ ((module) => {



module.exports = xmlDoc
xmlDoc.displayName = 'xmlDoc'
xmlDoc.aliases = []
function xmlDoc(Prism) {
  ;(function (Prism) {
    /**
     * If the given language is present, it will insert the given doc comment grammar token into it.
     *
     * @param {string} lang
     * @param {any} docComment
     */
    function insertDocComment(lang, docComment) {
      if (Prism.languages[lang]) {
        Prism.languages.insertBefore(lang, 'comment', {
          'doc-comment': docComment
        })
      }
    }
    var tag = Prism.languages.markup.tag
    var slashDocComment = {
      pattern: /\/\/\/.*/,
      greedy: true,
      alias: 'comment',
      inside: {
        tag: tag
      }
    }
    var tickDocComment = {
      pattern: /'''.*/,
      greedy: true,
      alias: 'comment',
      inside: {
        tag: tag
      }
    }
    insertDocComment('csharp', slashDocComment)
    insertDocComment('fsharp', slashDocComment)
    insertDocComment('vbnet', tickDocComment)
  })(Prism)
}


/***/ })

};
;