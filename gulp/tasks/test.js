'use strict';

// common dependencies
var
    gulp = require('gulp-help')(require('gulp')),
    g = require('gulp-load-plugins')(),
    config = require('../config'),
    arg = require('yargs').argv,
    env = arg.env;

// pug task dependencies
var
    pug = require('gulp-pug');

if (env === '' || env === undefined) env = 'dev';

gulp.task('test', 'Run Pug(Jade) templating',
    function () {
        return gulp
            .src(config.common.pug)
            .pipe(g.debug())
            .pipe(g.plumber({
                errorHandler: g.notify.onError("Error: <%= error.message %>")
            }))
            .pipe(pug())
            .pipe(g.if((env === 'prod'), g.htmlmin()))
            .pipe(gulp.dest(config.dest.html));
    });
