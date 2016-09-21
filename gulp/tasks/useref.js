'use strict';

// common dependencies
var
    gulp = require('gulp-help')(require('gulp')),
    g = require('gulp-load-plugins')(),
    config = require('../config'),
    arg = require('yargs').argv,
    env = arg.env;

// TODO: this is workaround, that has to be removed once styles was refactored to use useref
gulp.task('cssmin', 'Process css files and minify for production',
    function () {
        return gulp
            .src(config.dest.styles + '/main.css')
            .pipe(g.debug())
            .pipe(g.plumber({
                errorHandler: g.notify.onError("Error: <%= error.message %>")
            }))
            .pipe(g.if((env === 'test') || (env === 'prod'), g.csso()))
            .pipe(g.size({title: 'cssmin'}))
            .pipe(gulp.dest(config.dest.styles));
    });

// TODO: this is workaround, that has to be removed once styles was refactored to use useref
gulp.task('cssvendors', 'Copy css vendor assets for production',
    function () {
        return gulp
            .src(config.dest.styles_vendors + '/*.css')
            .pipe(g.debug())
            .pipe(gulp.dest(config.dest.styles + '/vendors'))
    }
);

// TODO: uglify is only for javascript only, if you add css, this task has to be adjusted
gulp.task('useref', 'Optimize compiled assets for packaging', ['cssmin', 'cssvendors'],
    function () {
        return gulp
            .src(config.dest.pug)
            .pipe(g.useref())
            .pipe(g.debug())
            .pipe(g.if('*.js', g.if((env === 'test') || (env === 'prod'), g.uglify())))
            .pipe(gulp.dest(config.dest.root))
    });
