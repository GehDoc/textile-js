/* eslint-disable prefer-const, no-multi-str, quotes */
const test = require( 'tape' );
const textile = require( '../src' );
// basic.yml

test( 'paragraphs showing original line number, modified by hook function', function ( t ) {
  let tx = "A single paragraph.\n\n\
Followed by another.";
  t.is( textile.convert( tx, {
    showOriginalLineNumber: true,
    hooks: [[
      ( jsonml ) => {
        if ( typeof ( jsonml[1] ) === 'object' ) {
          jsonml[1].class = 'hooked';
        }
        else {
          jsonml.slice( 1, 0, {class: 'hooked'});
        }
        return jsonml;
      }
    ]]
  }),
  '<p data-line="0" class="hooked">A single paragraph.</p>\n<p data-line="2" class="hooked">Followed by another.</p>' );
  t.end();
});

test( 'paragraphs showing original line number, modified by renderer function', function ( t ) {
  let tx = "A single paragraph.\n\n\
Followed by another.";
  t.is( textile.convert( tx, {
    showOriginalLineNumber: true,
    renderers: [
      ( tag, attributes, content ) => {
        attributes.class = "rendered";
        return content;
      }
    ]
  }),
  '<p data-line="0" class="rendered">A single paragraph.</p>\n<p data-line="2" class="rendered">Followed by another.</p>' );
  t.end();
});


test( 'paragraphs showing original line number, modified by hook function using context', function ( t ) {
  let tx = "A single paragraph.\n\n\
Followed by another.";
  t.is( textile.convert( tx, {
    showOriginalLineNumber: true,
    hooks: [[
      ( jsonml, parame, nodeLevel, context ) => {
        if ( typeof ( jsonml[1] ) === 'object' ) {
          jsonml[1].class = `hooked-${ context.num }`;
        }
        else {
          jsonml.slice( 1, 0, {class: `hooked-${ context.num }`});
        }
        return jsonml;
      }
    ]]
  }, {num: 1}),
  '<p data-line="0" class="hooked-1">A single paragraph.</p>\n<p data-line="2" class="hooked-1">Followed by another.</p>' );
  t.end();
});

test( 'paragraphs showing original line number, modified by renderer function using context', function ( t ) {
  let tx = "A single paragraph.\n\n\
Followed by another.";
  t.is( textile.convert( tx,
    {
      showOriginalLineNumber: true,
      renderers: [
        ( tag, attributes, content, context ) => {
          attributes.class = "rendered-" + context.num;
          return content;
        }
      ]
    },
    {num: 1}
  ),
  '<p data-line="0" class="rendered-1">A single paragraph.</p>\n<p data-line="2" class="rendered-1">Followed by another.</p>' );
  t.end();
});
