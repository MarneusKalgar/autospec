#bemtemplate
The modular "BEM like" approach to the project scaffolding (inspired by [Gulp Front Bilerplate](https://github.com/zoxon/gulp-front))

##Quick start

* Install dev-dependencies `npm i`
* Install dependencies `bower i`
* In `gulpfile.js` create relevant path in the `path` object for vendors
* Launch `gulp copy` to copy assets to developer directory
* Launch `gulp` to run watchers, server and compilers
* Launch `gulp production` to minify files for production

##Directory Layout

	bemtemplate                 # Project root
	├── /blocks/                # Source files
	├── /app/                   # Compiled files for developing
	├── /acc/                   # Minified files for production
	├── bower.json              # List of 3rd party libraries and utilities
	├── package.json            # Dependencies for node.js
	├── gulpfile.js             # gulp.js config
	├── LICENSE                 # License file
	└── README.md               # File you read