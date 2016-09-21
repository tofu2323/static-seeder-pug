'use strict';

// common dependencies
var
    gulp = require('gulp-help')(require('gulp')),
    g = require('gulp-load-plugins')(),
    config = require('../config'),
    arg = require('yargs').argv,
    env = arg.env;

gulp.task('images', 'Copy images files to packaging destination and minify them',
    function () {
        return gulp
            .src(config.common.images)
            .pipe(g.changed('img'))
            .pipe(g.debug())
            .pipe(g.plumber({
                errorHandler: g.notify.onError("Error: <%= error.message %>")
            }))
            .pipe(g.if((env === 'prod'), g.imagemin()))
            .pipe(g.size({title: 'images'}))
            .pipe(gulp.dest(config.dest.images));
    });
