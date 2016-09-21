'use strict';

// common dependencies
var
    gulp = require('gulp-help')(require('gulp')),
    g = require('gulp-load-plugins')(),
    config = require('../config'),
    arg = require('yargs').argv,
    env = arg.env;

// styles task dependencies
var
    nib = require('nib'),
    del = require('del'),
    path = require('path'),
    cmq = g.combineMediaQueries;

gulp.task('stylus', 'Compile stylus files with sourcemaps (cmq will run for production builds only)',
    function () {
        return gulp
            .src(config.common.styles)
            .pipe(g.debug())
            .pipe(g.plumber({
                errorHandler: g.notify.onError("Error: <%= error.message %>")
            }))
            .pipe(g.sourcemaps.init())
            .pipe(g.stylus({
                use: [nib()],
                import: ['nib']
            }))
            .pipe(g.if((env === 'test') || (env === 'prod'), cmq({log: true})))
            .pipe(g.if((env === 'test') || (env === 'prod'), g.sourcemaps.write()))
            .pipe(g.size({title: 'styles'}))
            .pipe(gulp.dest(config.dest.styles));
    });
