const fs = require( 'fs' );
const updateMessage = 'Updating textile lib to latest version.';

function exec ( cmd, callback ) {
  require( 'child_process' ).exec( cmd, function ( err, stdout, stderr ) {
    if ( err ) { throw err; }
    callback && callback( stdout, stderr );
  });
}

// read file to mem
const src = fs.readFileSync( './lib/textile.js', 'utf8' );

// switch to gh-pages branch
exec( 'git checkout gh-pages', o => {
  // pull latest
  exec( 'git pull', o => {
    // write changes
    fs.writeFileSync( './textile.js', src, 'utf8' );

    // commit changes
    exec( `git add ./textile.js && git commit -m "${ updateMessage }"`, o => {
      // push to github
      exec( 'git push', o => {
        // switch back to master
        exec( 'git checkout master' );
      });
    });
  });
});
