'use strict';

// common dependencies
var
    gulp = require('gulp-help')(require('gulp')),
    config = require('../config'),
    arg = require('yargs').argv,
    env = arg.env;

// delete task dependencies
var del = require('del');

gulp.task('delete', 'Delete directories',
    function (callback) {
        return del([config.dest.root], callback);
    });
