/*
** Textile parser for JavaScript
**
** Copyright (c) 2012 Borgar Þorsteinsson (MIT License).
**
*/

const merge = require( './merge' );
const jsonmlUtils = require( './jsonml' );
const { parseFlow } = require( './textile/flow' );
const { parseHtml } = require( './html' );

function textile ( txt, opt, context ) {
  // get a throw-away copy of options
  opt = merge( merge({}, textile.defaults ), opt || {});
  // run the converter
  return parseFlow( txt, opt, opt.lineOffset, context ).map( ( value ) => jsonmlUtils.toHTML(
    value,
    opt.renderers,
    {dontEscapeContentForTags: opt.dontEscapeContentForTags},
    context
  ) ).join( '' );
};
module.exports = textile;

// options
textile.defaults = {
  // single-line linebreaks are converted to <br> by default
  'breaks': true,
  // by default, don't map the elements of HTML output, with the line numbers of input text
  'showOriginalLineNumber': false,
  // line number offset of the first char of input text, for showOriginalLineNumber option
  'lineOffset': 0,
  // by default, don't set a special CSS class name to each HTML element mapped to an original line number
  'cssClassOriginalLineNumber': '',
  // functions to apply to each JsonML node before rendering to HTML
  'hooks': [],
  // function called where a JsonML node is rendered to HTML
  'renderers': {},
  // don't escape content of this tags list
  'dontEscapeContentForTags': []
};
textile.setOptions = textile.setoptions = function ( opt ) {
  merge( textile.defaults, opt );
  return this;
};

textile.parse = textile.convert = textile;
textile.html_parser = parseHtml;

textile.tokenize = function ( txt, opt, context ) {
  // get a throw-away copy of options
  opt = merge( merge({}, textile.defaults ), opt || {});
  // parse and return tree
  return parseFlow( txt, opt, opt.lineOffset, context );
};
textile.jsonml = function ( txt, opt, context ) {
  // parse and return tree
  return [ 'html' ].concat( textile.tokenize( txt, opt, context ) );
};
textile.serialize = function ( jsonml, opt, context ) {
  // get a throw-away copy of options
  opt = merge( merge({}, textile.defaults ), opt || {});
  // serialize
  return jsonmlUtils.toHTML(
    jsonml,
    opt.renderers,
    {dontEscapeContentForTags: opt.dontEscapeContentForTags},
    context
  );
};

textile.jsonmlUtils = jsonmlUtils;
