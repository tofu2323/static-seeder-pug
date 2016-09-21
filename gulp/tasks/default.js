'use strict';

// default gulp task
var
    gulp = require('gulp-help')(require('gulp'));

// by default using development build
gulp.task('default', 'Run default task', ['serve'])
