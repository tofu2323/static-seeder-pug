'use strict';

// common dependencies
var
    gulp = require('gulp-help')(require('gulp')),
    g = require('gulp-load-plugins')(),
    config = require('../config'),
    path = require('path');

// copy task dependencies
var merge = require('merge-stream');

gulp.task('copy', 'Copy assets to temporary location',
    function () {
        // fonts
        var fonts = gulp.src(config.common.fonts)
            .pipe(gulp.dest(config.dest.fonts))
            .pipe(g.size({title: 'copy-fonts'}));

        // data
        var data = gulp.src(config.common.data)
            .pipe(gulp.dest(config.dest.data))
            .pipe(g.size({title: 'copy-data'}));

        return merge(fonts, data)
            .pipe(g.size({title: 'copy-assets-www'}));
    });
