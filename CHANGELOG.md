# Change Log
All notable changes to the "textile-js" library will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [2.0.112] - 20210307
### Added
- [LIBRARY] Add option renderContext on toHTML function, to provide an execution context to renderers.


## [2.0.111] - 20210131
### Added
- [LIBRARY] Add option dontEscapeContentForTags on toHTML function, to allow to not escape content of a configurable list of tags


## [2.0.110] - 20201010
### Added
* add `npm lint fix` command
* [Sync from original repo] Support self referencing link syntax
* [Sync from original repo] Add more cases to phrase boundary detection

### Fixed
* correct dingus script
* [Sync from original repo]  npm package does not need to contain everything
* cleanup doc
* [Sync from original repo] Textile does not permit lists to start with more than one * or #

### Changed
* [Sync from original repo]  Updated build system : Removed .min version of lib (it is pointless, we have map files now)
* [Sync from original repo] Update fix for borgar/textile-js#52


## [2.0.108] - 20200816
### Fixed
- [INTERNAL] Dependency update and security fix


## [2.0.107] - 20200330
### Added
- [LIBRARY] Add rendering hooks.
- [INTERNAL] Add tests for hooks and renderers


## [2.0.106] - 20200329
### Added
- [LIBRARY] add a new parameters to configurable hook functions of applyHook, to determine the current node level to the root node.
- [BINARY] Add `--css-class-original-line-number` option.

### Fixed
- [LIBRARY] add a original line number to rulers.
- [LIBRARY] correct line numbering on nested list items.
- [LIBRARY] correct line numbering of block-level elements inside paragraphs, no-paragraphs, table's cells, definition lists.
- [LIBRARY] correct line numbering of inlined tags, general case.
- [LIBRARY] add a HTML attribute @data-line-end@ to inlined tags.


## [2.0.105] - 20200314
### Changed
- [LIBRARY] Keep original line number in the JsonML tree for HTML comments. Textile comments will stay ignored, to not change actual behavior.

### Fixed
- [LIBRARY] LI with small text should be line-numbered correctly.


## [2.0.104] - 20200304
### Changed
- [INTERNAL] More linting

### Fixed
- [LIBRARY] further fix for borgar/textile-js#52 : Stop processing after garbage cleaning, if we have reached the end of stream

### Added
- [DOC] activate live web editor
- [DOC] describe new features on our repository
- [LIBRARY] add a configurable hook, to modify JsonML nodes before rendering to HTML.
- [LIBRARY] add some JsonML tools functions, under the exported `jsonmlUtils` property.


## [2.0.103] - 20200227
### Changed
- [DEPENDENCIEs] Update dependencies, following main repo.
- [DOC] Move CHANGELOG to the right place
- [INTERNAL] Linting

### Added
- [LIBRARY] Add version and build date as comment in the produced code (full and minimized)


## [2.0.102] - 20200219
### Added
- [LIBRARY] Add a `tokenize( textileString, options )` member, to get the JSONML tree without a global 'html' node.


## [2.0.101] - 20200204
### Added
- [LIBRARY] Add original line number to inline HTML tags.

### Fixed
- [LIBRARY] Import "Fixing an error in phrase bounds" from original repo
- [LIBRARY] Ignore blanks between blocks. Fixes borgar/textile-js#52


## [2.0.99] - 20191027
### Added
- [LIBRARY] Option "showOriginalLineNumber" : adds original (source) line number to the generated HTML, by adding the HTML attribute "data-line" to each relevant tag.
- [LIBRARY] Option "cssClassOriginalLineNumber" : adds this CSS className to each generated tag in which original line number is added.
- [BIN] Option --show-original-line-number : activate the corresponding option of the library.

### Changed
- Updated dev dependencies
- Added VSCode projects files