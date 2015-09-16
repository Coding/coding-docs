var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var clean = require('gulp-clean');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var using = require('gulp-using');
var streamify = require('gulp-streamify');
var exec = require('child_process').exec;
var webserver = require('gulp-webserver');
var series = require('stream-series');
var inject = require('gulp-inject');
var random_string = require('random-string');
var lowercase = require('lower-case');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var babelify = require('babelify');

var random_length = 8;
var path = {
    DIR: "react",
    STATIC: "static",
    VENDOR: "static/vendor",
    SEARCH_BUNDLE_MIN: 'search.bundle.min.js',
    SEARCH_BUNDLE: 'search.bundle.js',
    SEARCH_ENTRY_POINT: 'react/modules/search.module.js'
};

var dist = {
    DIR: "dist",
    SRC: "dist/react",
    BUILD: 'dist/build',
    SRC_APP: "dist/react/app",
    SRC_STATIC: "dist/react/static",
    BUILD_APP: "dist/build/app",
    BUILD_STATIC: "dist/build/static"
}


var file = {
    CSS: [
        path.DIR + "/**/*.css",
    ],
}


gulp.task("cssmin", function () {
    return gulp.src(file.CSS)
        .pipe(cssmin())
        .pipe(concat("bundle.min.css"))
        .pipe(gulp.dest(path.STATIC + "/css"));
})


gulp.task("clean", function () {
    return gulp.src([dist.DIR], {read: false}).pipe(clean({force: true}));
});


gulp.task('watch', ["cssmin"], function () {
    gulp.watch(path.DIR);
    var watcher = watchify(browserify({
        entries: [path.SEARCH_ENTRY_POINT],
        transform: [['reactify']],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    }));
    try {
        return watcher.on('update', function () {
            watcher.bundle()
                .pipe(source(path.SEARCH_BUNDLE))
                .pipe(gulp.dest(dist.SRC_APP))
            console.log('Updated');
        })
            .bundle()
            .pipe(source(path.SEARCH_BUNDLE))
            .pipe(gulp.dest(dist.SRC_APP));
    } catch (e) {

    }
});

gulp.task('build', ["cssmin"], function () {
    return browserify({
        entries: [path.SEARCH_ENTRY_POINT],
        transform: [['babelify', {optional: ['runtime']}]],
    })
        .bundle()
        .pipe(source(path.SEARCH_BUNDLE_MIN))
        .pipe(streamify(uglify(path.SEARCH_BUNDLE_MIN)))
        .pipe(gulp.dest(dist.BUILD_APP));
});

gulp.task('default', ['watch']);
gulp.task('server', ['build']);