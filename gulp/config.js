// common module declaration
var path = require('path');

var config = {
    root: './',
    pug: './src/views',
    styles: './src/_stylus',
    scripts: './src/_scripts',
    images: './src/_images',
    data: './src/_static/data',
    fonts: './src/_static/fonts',
    dest: '.htdocs/',
};

module.exports = {

    // paths declaration
    common: {
        root: config.root,
        www: config.www,
        pug: path.join(config.pug, '**/!(_)*.pug'),
        styles: path.join(config.styles, '**/!(_)*.{styl,css}'),
        scripts: path.join(config.scripts, '**/!(_)*.js'),
        images: path.join(config.images, '**/*'),
        data: path.join(config.data, '**/*'),
        fonts: path.join(config.fonts, '**/*')
    },

    // for serve path with partials
    serve: {
        pug: path.join(config.pug, '**/*.pug'),
        styles: path.join(config.styles, '**/*.{styl,css}'),
        scripts: path.join(config.scripts, '**/*.js'),
        images: path.join(config.images, '{,*/}*.{gif,jpg,png,ico}'),
        data: path.join(config.data, '{/,*/}*.json')
    },

    // intermediate and build assets destination
    dest: {
        root: config.dest,
        scripts: path.join(config.dest, 'static/js'),
        styles: path.join(config.dest, 'static/css'),
        styles_vendors: path.join(config.dest, 'static/css/vendors'),
        images: path.join(config.dest, 'static/img'),
        pug: path.join(config.dest, '/'),
        data: path.join(config.dest, 'static/data'),
        fonts: path.join(config.dest, 'static/css/fonts/')
    },

    // select corresponding endpoint based on build configuration
    mapping: {
        backend_api: {
            dev: 'http://localhost:3000',
            test: 'http://sample_app.test.com',
            prod: 'http://sample_app.prod.com'
        },
        web_base_url: {
            dev: 'http://localhost:8000',
            test: 'http://sample_app.test.com',
            prod: 'http://sample_app.prod.com'
        }
    },

    // browsersync configuration
    browserSync: {
        server: {
            baseDir: [
                config.dest
            ],
            routes: {
                "/bower_components": './bower_components',
            }
        },
        files: [
            path.join(config.dest, '{,*/}*.js'),
            path.join(config.dest, '**/*.css'),
            path.join(config.dest, 'data/*.json'),
            path.join(config.dest, 'img/{,*/}*.{gif,jpg,png,ico}'),
            path.join(config.dest, '**/*.html'),
        ],
        ui: {
            port: 8888
        },
        port: 8000,
        ghostMode: true,
        notify: false
    }
};
