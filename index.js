let preamble = function(doctype) {
  doctype = doctype || 'html';
  return `<!DOCTYPE ${doctype}><html>`;
}
let _tagConcat = function(mainTagName, optionalAttributes) {
  return function(tags) {
    let string = "";
    string = optionalAttributes ? string.concat(`<${mainTagName} ${optionalAttributes}>`) : string.concat(`<${mainTagName}>`);
    for (let tag of tags) {
      string = string.concat(tag);
    }
    string = string.concat(`</${mainTagName}>`);
    return string;
  }
}
let head = _tagConcat("head");
let body = _tagConcat("body", "style=\"margin: 0;\"");
let postamble = function() {return "</html>";}
