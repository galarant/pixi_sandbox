var gulp = require('gulp'),
  browserify = require('browserify'),
  watchify = require('watchify'),
  source = require('vinyl-source-stream'),

  sass = require('gulp-sass'),
  ngHtml2Js = require('browserify-ng-html2js'),

  concat = require('gulp-concat'),
  queue = require('streamqueue'),

  autoprefixer = require('gulp-autoprefixer'),
  minify = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),

  logger = function (message) {
    console.log(message.toString());
    this.emit('end');
  },
  path = {
    dest: 'static/',
    source: 'app/',

    cssLibs: [
      'node_modules/basscss/css/basscss.css',
      'node_modules/basscss-background-images/index.css'
    ]
  },
  bundle;


browserify = browserify(path.source + 'app.js', {
    baseDir: path.source,
    paths: ['./node_modules', './vendor', './app']
  })
  .transform(ngHtml2Js({
    extension: 'html',
    module: 'templates'
  }));

bundle = function () {
  return browserify.bundle().on('error', logger)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(path.dest));
};

gulp.task('browserify', bundle);

gulp.task('styles', function () {
  var queueOptions = {
    objectMode: true
  };

  return queue(
      queueOptions,
      gulp.src(path.cssLibs),
      gulp.src(path.source + '**/*.scss').pipe(sass().on('error', logger))
    )
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(path.dest));
});

gulp.task('watch', function () {
  browserify = watchify(browserify);
  browserify.on('update', bundle);
  browserify.on('log', logger);

  gulp.watch(path.source + '**/*.scss', ['styles']);
});

gulp.task('dev', ['browserify', 'styles', 'watch']);

gulp.task('default', ['browserify', 'styles'], function () {
  gulp.src(path.dest + 'bundle.css')
    .pipe(autoprefixer())
    .pipe(minify())
    .pipe(gulp.dest(path.dest));

  gulp.src(path.dest + 'bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest(path.dest));
});
