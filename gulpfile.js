var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function(){
  return gulp.src("./style.scss")

  .pipe(sass({
    outputStyle: "expanded"
  }))

  .pipe(gulp.dest("./"));
});

gulp.task("watch", function(){
  gulp.watch('./style.scss', gulp.task("sass"));
});