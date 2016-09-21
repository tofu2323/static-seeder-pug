'use strict';

// build task dependencies
var
    gulp = require('gulp-help')(require('gulp')),
    runSequence = require('run-sequence');

// for development
gulp.task('build', 'Make a build without minification', ['delete'],
    function (callback) {
        runSequence(
            ['pug', 'images', 'stylus', 'scripts'],
            'copy',
            callback
        );
    }
);
