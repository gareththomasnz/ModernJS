var gulp = require("gulp"),
           babel = require("gulp-babel");
           //less = require("gulp-less");
           //sourcemaps = require("gulp-sourcemaps");
           $ = require("gulp-load-plugins")();
           
      const config = {
            styles: {
                  src: ["./src/styles/site.less"],
                  dest: "./public/styles",
                  srcDirectory: ["./src/scripts/**/*.{less,css}"]
            },
            scripts: {
                 src: ["./src/scripts/**/*.js"],
                 dest: "./public/scripts"
            }
      };
           
gulp.task("dev:styles",styles(false));
gulp.task("dev:scripts", devScripts);

gulp.task("dev", gulp.parallel("dev:styles", "dev:scripts"));
gulp.task("dev:watch", gulp.series("dev", devWatch));

gulp.task("prod:styles", styles(true));
gulp.task("prod:scripts", prodScripts);

gulp.task("prod", gulp.parallel("prod:styles", "prod:scripts"));

gulp.task("default", gulp.series("dev"));

function devWatch(){
      $.livereload.listen();
      
      gulp.watch(config.styles.srcDirectory, gulp.series("dev:styles"));
      gulp.watch(config.scripts.src, gulp.series("dev:scripts"));
}

//return gulp.src(["./src/scripts/application.js", "./src/scripts/utility.js"])

function styles(isProduction){
      return() => {
      return gulp
        .src(config.styles.src)
        .pipe($.if(isProduction, $.sourcemaps.init()))
        .pipe($.less())
        .pipe($.if(isProduction, $.minifyCss()))
        .pipe($.if(!isProduction, $.sourcemaps.write()))
        .pipe(gulp.dest(config.styles.dest));
      };
}

function devScripts(){
       return gulp
        .src(config.scripts.src)
        .pipe($.sourcemaps.init())
        .pipe(babel())        
        .pipe($.sourcemaps.write("."))
        .pipe(gulp.dest(config.scripts.dest))
        .pipe($.livereload());
}

//function clean(c){
//        setTimeout(() => {
//                console.log("CLEANED");
//                c();
//                }, 1000);
//}
//
//function publish(c){
//        setTimeout(() => {
//                console.log("PUBLISHED");
//                c();
//                }, 1000);
//}

function prodScripts(){
      return gulp
      .src(config.scripts.src)
      .pipe(babel())
      .pipe($.concat("app.js"))
      .pipe($.uglify())
      .pipe(gulp.dest(config.scripts.dest));
}