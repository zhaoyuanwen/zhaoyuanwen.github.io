let gulp = require("gulp");

let app = {
    src : "./src",
    dist : "./dist",
    bak : "./bak"
}

//html压缩
let htmlmin = require("gulp-htmlmin");

gulp.task("htmlmin",function(done){
    gulp.src(`${app.src}/**/*.{htm,html}`)
        .pipe(htmlmin({
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
        }))
        .pipe(gulp.dest(app.dist));
    done();
});

//css压缩
let cssmin = require("gulp-cssmin");

gulp.task("cssmin",function(done){
    gulp.src(`${app.src}/**/*.css`)
        .pipe(cssmin())
        .pipe(gulp.dest(app.dist));
    done();
});

//js模糊混淆
let jsmin = require("gulp-uglify-es");

gulp.task("jsmin",function(done){
    gulp.src(`${app.src}/**/*.js`)
        .pipe(jsmin.default())
        .pipe(gulp.dest(app.dist));
    done();
});

//重命名压缩
let rename = require("gulp-rename");

gulp.task("bak",function(done){
    gulp.src(`${app.src}/**`)
        .pipe(rename(function(target){
            // console.log(target);
            if(target.extname){
                target.extname += ".bak";
            }
        }))
        .pipe(gulp.dest(app.bak));
    done();
});

//名字拼接压缩
let concat = require("gulp-concat");

gulp.task("concat",function(done){
    gulp.src(`${app.src}/**/*.css`)
        .pipe(concat("all.css"))
        .pipe(cssmin())
        .pipe(gulp.dest(app.dist));
    done();
});

//整合less文件
let less = require("gulp-less");

gulp.task("less1",function(done){
    gulp.src(`${app.src}/less/*.less`)
        .pipe(less())
        .pipe(concat("all.css"))
        .pipe(gulp.dest(app.dist + "/css"));
    done();
});

gulp.task("less2",function(done){
    gulp.src(`${app.src}/less/*.less`)
        .pipe(less())
        .pipe(concat("all.css"))
        .pipe(cssmin())
        .pipe(rename("all.min.css"))
        .pipe(gulp.dest(app.dist + "/css"));
    done();
});