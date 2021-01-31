/* eslint-disable prefer-const, no-multi-str, quotes */
const test = require( 'tape' );
const textile = require( '../src' );

test( 'escape content of <code> tag when option is not used', function ( t ) {
  let tx = "<code><code></code>";
  t.is( textile.convert( tx ),
    "<p><code>&lt;code&gt;</code></p>", tx );
  t.end();
});

test( 'does not escape content of <code> tag when option excludes <code>', function ( t ) {
  let tx = "<code><code></code>";
  t.is( textile.convert( tx, { dontEscapeContentForTags: ['code'] }),
    "<p><code><code></code></p>", tx );
  t.end();
});
