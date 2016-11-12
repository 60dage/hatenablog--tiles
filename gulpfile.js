var gulp = require("gulp");

// LESSコンパイル
var less = require("gulp-less");
gulp.task("less", function() {
    gulp.src("tiles.less")
        .pipe(less())
        .pipe(gulp.dest("."));
});

// ベンダープレフィックス自動化
var autoprefixer = require("gulp-autoprefixer");
gulp.task("less", function() {
    gulp.src("tiles.less")
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest("."));
});

// ファイルの監視
gulp.task("default", function() {
    gulp.watch(["less/*.less","tiles.less"],["less"]);
});
