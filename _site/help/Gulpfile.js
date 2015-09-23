var gulp = require('gulp');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var clean = require('gulp-clean');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var using = require('gulp-using');
var streamify = require('gulp-streamify');
var exec = require('child_process').exec;
var series = require('stream-series');
var inject = require('gulp-inject');
var random_string = require('random-string');
var lowercase = require('lower-case');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var babelify = require('babelify');

var random_length = 8;

var url_prefix = "/help";
var path = {
    REACT: "react",
    STATIC: "static",
    CSS: "css",
    VENDOR: "static/vendor",
    LIB: "static/js",
    INCLUDE: "_includes",
    SEARCH_BUNDLE_MIN: 'search.bundle.min.js',
    SEARCH_BUNDLE: 'search.bundle.js',
    SEARCH_ENTRY_POINT: 'react/modules/search.module.js'
};

var dist = {
    DIR: "dist",
    SRC: "dist/react",
    SRC_APP: "dist/react/app",
    SRC_STATIC: "dist/react/static",
    BUILD: 'dist',
    FONT: 'dist/fonts',
    BUILD_APP: "dist/app",
    BUILD_STATIC: "dist/static"
}


var file = {
    CSS: [
        path.REACT + "/**/*.css",
        path.CSS + "/**/*.css",
        path.STATIC + "/css/**/*.css",
        path.VENDOR + "/font-awesome/css/font-awesome.min.css",
        path.VENDOR + "/highlightjs/styles/github.css",
        path.VENDOR + "/metisMenu/dist/metisMenu.min.css"
    ],
    JS: [
        path.VENDOR + "/jquery/dist/jquery.min.js",
        path.VENDOR + "/metisMenu/dist/metisMenu.min.js",
        path.VENDOR + "/ScrollToFixed/jquery-scrolltofixed-min.js",
        path.VENDOR + "/highlightjs/highlight.pack.js",
        path.LIB + "/toc.js"
    ],
}
gulp.task("clean", function () {
    return gulp.src([dist.DIR], {read: false}).pipe(clean({force: true}));
});


gulp.task("copy-font-Awesome", ["clean"], function () {
    return gulp.src([path.VENDOR + "/font-awesome/fonts/**/*.*"], {base: path.VENDOR + "/font-awesome/fonts/"})
        .pipe(gulp.dest(dist.FONT));
});

gulp.task("cssmin", ["copy-font-Awesome"], function () {
    return gulp.src(file.CSS)
        .pipe(cssmin())
        .pipe(concat("main.min.css"))
        .pipe(gulp.dest(dist.BUILD + "/css"));
});


gulp.task("jsmin", ["cssmin"], function () {
    return gulp.src(file.JS)
        .pipe(uglify({mangle: false}))
        .pipe(concat("main.min.js"))
        .pipe(gulp.dest(dist.BUILD + "/js"));
});


gulp.task('watch', ["jsmin"], function () {
    gulp.watch(path.DIR, ["cssmin"]);
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


/**
 *  自动更新 index.html 的引用文件
 *  **/
gulp.task('inject', ["jsmin"], function () {
    var target = gulp.src(path.INCLUDE + '/head.html');
    var sources = gulp.src([dist.BUILD + "/**/*.*"], {
        read: false
    });
    return target.pipe(using()).pipe(inject(series(sources), {
        transform: function (filepath, i, length, sourceFile, targetFile) {
            filepath = url_prefix + filepath + "?" + lowercase(random_string({length: random_length}));
            return inject.transform.apply(inject.transform, [filepath, i, length, sourceFile, targetFile]);
        }
    })).pipe(gulp.dest(path.INCLUDE));
});


gulp.task('build', ["inject"], function () {
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