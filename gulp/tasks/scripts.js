'use strict';

// common dependencies
var
    gulp = require('gulp-help')(require('gulp')),
    g = require('gulp-load-plugins')(),
    config = require('../config'),
    arg = require('yargs').argv,
    env = arg.env;

if (env === '' || env === undefined) env = 'dev';

gulp.task('scripts', 'Process scripts',
    function () {
        return gulp.src(config.common.scripts)
            .pipe(g.debug())
            .pipe(g.plumber({
                errorHandler: g.notify.onError("Error: <%= error.message %>")
            }))
            .pipe(g.preprocess({
                context: {
                    API_ENDPOINT: config.mapping.backend_api[env],
                    WEB_BASE_URL: config.mapping.web_base_url[env]
                }
            }))
            .pipe(g.size({title: 'scripts'}))
            .pipe(gulp.dest(config.dest.scripts))
    });
