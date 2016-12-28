"use strict";

var gulp = require('gulp'),
		pug = require('gulp-pug'),
		stylus = require('gulp-stylus'),
		rupture = require('rupture'),
		concat = require('gulp-concat'),
		plumber = require('gulp-plumber'),
		rename = require('gulp-rename'),
		prefix = require('gulp-autoprefixer'),
		imagemin = require('gulp-imagemin'),
		browserSync = require('browser-sync').create();

var useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
		cssmin = require('gulp-clean-css'),
		uglify = require('gulp-uglify'),
		rimraf = require('rimraf'),
		ftp = require('vinyl-ftp'),
		notify = require('gulp-notify');

var paths = {
			blocks: 'blocks/',
			assets: 'blocks/_assets/',
			vendors: {
				js: {
					jquery: 'blocks/_assets/libs/jquery/dist/jquery.min.js',
					anim: 'blocks/_assets/libs/animsition/dist/js/animsition.min.js'
				},
				css: {
					anim: 'blocks/_assets/libs/animsition/dist/css/animsition.min.css'
				}
			},
			devDir: 'app/',
			outputDir: 'acc/'
		};


/*********************************
		Developer tasks
*********************************/

//pug compile
gulp.task('pug', function() {
	return gulp.src(paths.blocks + '*.pug')
		.pipe(plumber())
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest(paths.devDir))
		.pipe(browserSync.stream())
});

//stylus compile
gulp.task('stylus', function() {
	return gulp.src(paths.blocks + '*.styl')
		.pipe(plumber())
		.pipe(stylus({
			use: rupture()
		}))
		.pipe(prefix({
			browsers: ['last 15 versions'],
			cascade: true
		}))
		.pipe(gulp.dest(paths.devDir + 'css/'))
		.pipe(browserSync.stream());
});

//js compile
gulp.task('scripts', function() {
	return gulp.src([
			paths.blocks + 'template.js', 
			paths.blocks + '**/*.js', 
			'!' + paths.assets + '**/*.js'
		])
		.pipe(concat('main.js'))
		.pipe(gulp.dest(paths.devDir + 'js/'))
		.pipe(browserSync.stream());
});

//watch
gulp.task('watch', function() {
	gulp.watch(paths.blocks + '**/*.pug', ['pug']);
	gulp.watch(paths.blocks + '**/*.styl', ['stylus']);
	gulp.watch(paths.blocks + '**/*.js', ['scripts']);
});

//server
gulp.task('browser-sync', function() {
	browserSync.init({
		port: 3000,
		server: {
			baseDir: paths.devDir
		}
	});
});


/*********************************
		Production tasks
*********************************/

//clean
gulp.task('clean', function(cb) {
	rimraf(paths.outputDir, cb);
});

//css + js
gulp.task('build', ['clean'], function () {
	return gulp.src(paths.devDir + '*.html')
		.pipe( useref() )
		.pipe( gulpif('*.js', uglify()) )
		.pipe( gulpif('*.css', cssmin()) )
		.pipe( gulp.dest(paths.outputDir) );
});

//copy images to outputDir
gulp.task('imgBuild', ['clean'], function() {
	return gulp.src(paths.devDir + 'img/**/*.*')
		.pipe(gulp.dest(paths.outputDir + 'img/'));
});

//copy fonts outputDir
gulp.task('fontsBuild', ['clean'], function() {
	return gulp.src(paths.devDir + '/fonts/*')
		.pipe(gulp.dest(paths.outputDir + 'fonts/'));
});

//ftp
gulp.task('send', ['production'], function() {
	var conn = ftp.create( {
		host:     '77.120.110.166',
		user:     'alexlabs',
		password: 'Arj4h00F9x',
		parallel: 5
	} );

	/* list all files you wish to ftp in the glob variable */
	var globs = [
		'acc/**/*',
		'!node_modules/**' // if you wish to exclude directories, start the item with an !
	];

	return gulp.src( globs, { base: '.', buffer: false } )
		.pipe( conn.newer( '/public_html/' ) ) // only upload newer files
		.pipe( conn.dest( '/public_html/' ) )
		.pipe(notify("Dev site updated!"));

});


//develop
gulp.task('develop', ['browser-sync', 'watch', 'pug', 'stylus', 'scripts']);

//production
gulp.task('production', ['build', 'imgBuild', 'fontsBuild']);

//default
gulp.task('default', ['develop']);