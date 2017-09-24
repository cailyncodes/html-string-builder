"use strict";

var preamble = function preamble(doctype) {
  doctype = doctype || 'html';
  return "<!DOCTYPE " + doctype + "><html>";
};
var _tagConcat = function _tagConcat(mainTagName, optionalAttributes) {
  return function (tags) {
    var string = "";
    string = optionalAttributes ? string.concat("<" + mainTagName + " " + optionalAttributes + ">") : string.concat("<" + mainTagName + ">");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var tag = _step.value;

        string = string.concat(tag);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    string = string.concat("</" + mainTagName + ">");
    return string;
  };
};
var head = _tagConcat("head");
var body = _tagConcat("body", "style=\"margin: 0;\"");
var postamble = function postamble() {
  return "</html>";
};
//# sourceMappingURL=index.js.map
