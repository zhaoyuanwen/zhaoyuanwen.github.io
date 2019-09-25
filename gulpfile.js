let gulp = require("gulp");

let app = {
    fonts : "./node_modules/bootstrap/fonts",
    js : "./node_modules/bootstrap/js",
    less : "./node_modules/bootstrap/less/bootstrap.less",
    dist : "./node_modules/bootstrap/dist"
}

//复制fonts
gulp.task("copy",function(done){
    gulp.src(app.fonts)
        .pipe(gulp.dest(app.dist));
    gulp.src(app.fonts + "/**")
        .pipe(gulp.dest(app.dist + "/fonts"));    
    done();
});

//整合js为bootstrap.js

let jsmin = require("gulp-uglify-es");
let concat = require("gulp-concat");

gulp.task("concat",function(done){
    gulp.src(app.js)
        .pipe(gulp.dest(app.dist));
    gulp.src(`${app.js}/*.js`)
        .pipe(concat("bootstrap.js"))
        .pipe(jsmin.default())
        .pipe(gulp.dest(app.dist + "/js"));
    done();
});

//编译less文件并整合成bootstrap.css
let rename = require("gulp-rename");
let less = require("gulp-less");
let cssmin = require("gulp-cssmin");

gulp.task("less",function(done){
    gulp.src(app.less)
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename("bootstrap.min.css"))
        .pipe(gulp.dest(`${app.dist}/css`));
    done();
});

