// https://www.mikestreety.co.uk/blog/advanced-gulp-file

var gulp = require('gulp'),
  minifyCSS = require('gulp-clean-css'),
  // uglify = require('gulp-uglify'),
  // htmlmin = require('gulp-htmlmin'),
  // del = require('del'),
  rename = require('gulp-rename'),
  // plumber = require('gulp-plumber'),
  autoprefixer = require('gulp-autoprefixer'),
  // concat = require('gulp-concat'),
  // responsive = require('gulp-responsive'),
  // responsive_config = require('gulp-responsive-config'),
  // newer = require('gulp-newer'),
  // babel = require('gulp-babel'),
  // nodemon = require('nodemon'),
  sass = require('gulp-sass');
  // browserSync = require('browser-sync').create();

// // gulp-responsive - simple
// gulp.task('images', function() {
//   del(['_Sync/images/*']), function(err) { console.log('Images deleted from _Sync/images/'); };

//   return gulp
//     .src('src/images/*.{png,jpg}')
//     .pipe(responsive({
//       '*.jpg': {
//         width: 200,
//         quality: 70,
//         progressive: true,
//         compressionLevel: 6,
//         withMetadata: false
//       }
//     }))
//     .pipe(gulp.dest('_Sync/images'));
// })

// // gulp-responsive - complex with gulp-responsive-config
// gulp.task('images', function() {
//   del(['_Sync/images/*']), function(err) { console.log('Images NOT deleted from _Sync/images/'); };

//   var config = responsive_config([
//     'src/css/*.css',
//     'src/index.html'
//   ]);

//   return gulp.src('src/images/*')
//     .pipe(newer('_Sync'))
//     .pipe(plumber())
//     .pipe(responsive(config, {
//       skipOnEnlargement: true,
//       quality: 80,
//       withMetadata: false,
//     }))
//     .pipe(gulp.dest('_Sync/images'));
// })

// // HTML - task for copying dev html doc to git / sync folder
// gulp.task('html', function() {
//   return gulp.src('_dev/index.html')
//     .pipe(newer('_prod'))
//     .pipe(htmlmin())
//     .pipe(gulp.dest('_prod'))
//     .pipe(browserSync.stream());
// })

// // WATCH - task for watching dev folder files and copying to git / sync folder on save
// gulp.task('watch', function() {
//     browserSync.init({
//         server: "./_prod"
//     });
//   gulp.watch('_dev/index.html', ['html'])
//   gulp.watch('_dev/sass/*.scss', ['style_build'])
//   gulp.watch('_dev/js/*.js', ['script_build'])
// })

// gulp.task('default', ['html', 'style', 'script', 'watch']); // default is what's called by 'gulp' for this folder

// gulp.task('style_build', function() {
//   return gulp.src('./_dev/sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(concat('main.css'))
//     .pipe(autoprefixer())
//     // .pipe(minifyCSS())
//     .pipe(gulp.dest('_prod/css'))
//     .pipe(browserSync.stream());
// })

// gulp.task('script_build', function() {
//   return gulp.src('_dev/js/app.js') // src location (pulls all js files)
//     .pipe(plumber()) // prevents errors from breaking watch
//     // .pipe(babel({ presets: ['env'] }))
//     .pipe(concat('app.js'))
//     // .pipe(uglify())
//     .pipe(gulp.dest('_prod/js'))
//     .pipe(browserSync.stream());
// })

// // BUILD - for creating production build
// gulp.task('build', ['html', 'style_build', 'script_build']);

gulp.task('styles', function() {
  gulp.src('./sass/main.scss')
    // .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(rename('index.css'))
    .pipe(gulp.dest('./src/css'))
});

gulp.task('styles-watch',function() {
  gulp.watch('./sass/main.scss',['styles']);
});

// // browsersync & sass start on "gulp"
gulp.task('default', ['styles-watch'], () => {
});

// gulp.task('browser-sync', ['nodemon'], () => {
// 	browserSync.init(null, {
// 		proxy: "http://localhost:3000",
//         files: ["./**/*.*"],
//         browser: "google chrome",
//         port: 7000,
// 	});
// });

// gulp.task('nodemon', (cb) => {
// 	let started = false;
// 	return nodemon({
// 		script: 'app.js'
// 	}).on('start', () => {
// 		// to avoid nodemon being started multiple times
// 		// thanks @matthisk
// 		if (!started) {
// 			cb();
// 			started = true; 
// 		} 
// 	});
// });