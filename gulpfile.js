const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

// 1. Task nén CSS (đặt tên là pack-css)
gulp.task('pack-css', function () {    
    return gulp.src([
        'src/css/font.css',
        'src/css/base.css',
        'src/css/utility.css',
        'src/css/custom.css',
        'src/css/responsive.css'
    ])
    .pipe(concat('style.min.css')) 
    .pipe(cleanCSS())              
    .pipe(gulp.dest('dist/css'));  
});

// 2. Task theo dõi sự thay đổi (đặt tên là watch)
gulp.task('watch', function() {
    // Nó sẽ canh chừng tất cả file .css trong thư mục src/css
    gulp.watch('src/css/*.css', gulp.series('pack-css')); 
});

// 3. Task mặc định (Chỉ cần gõ npx gulp là chạy cả 2)
gulp.task('default', gulp.series('pack-css', 'watch'));