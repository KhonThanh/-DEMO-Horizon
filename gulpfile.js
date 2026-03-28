const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

gulp.task('pack-css', function () {
    return gulp.src([
        'css/font.css',        // Font thường ưu tiên đầu
        'css/base.css',        // Base reset
        'css/utility.css',     // Tiện ích
        'css/custom.css',      // Code của bồ
        'css/responsive.css'   // Responsive phải ở cuối cùng để đè các class trên
    ])
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});