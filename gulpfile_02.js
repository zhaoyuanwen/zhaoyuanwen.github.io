let gulp = require("gulp");

let app = {
    src : "./src",
    dist : "./dist"
}

gulp.task("copy1",function(done){
    gulp.src(app.src)
        .pipe(gulp.dest(app.dist));
    gulp.src(app.src + "/**")
        .pipe(gulp.dest(app.dist + "/src"));
    done();
});

gulp.task("copy2",function(done){
    gulp.src(app.src + "/js")
        .pipe(gulp.dest(app.dist));
    gulp.src(app.src + "/css")
        .pipe(gulp.dest(app.dist));
    gulp.src(app.src + "/js/**")
        .pipe(gulp.dest(app.dist + "/js"));
    gulp.src(app.src + "/css/**")
        .pipe(gulp.dest(app.dist + "/css"));
    done();
});

gulp.task("copy3",function(done){
    gulp.src([`${app.src}/*`,`!${app.src}/js`,`!${app.src}/css`])
        .pipe(gulp.dest(app.dist));
    done();
});

gulp.task("copy4",function(done){
    gulp.src([`${app.src}/**/*.{html,htm}`])
        .pipe(gulp.dest(app.dist));
    done();
});

let clean = require("gulp-clean");

gulp.task("clean1",function(done){
    gulp.src(app.dist)
        .pipe(clean());
    done();
});

gulp.task("clean2",function(done){
    gulp.src(app.dist + "/*")
        .pipe(clean());
    done();
});

gulp.task("clean3",function(done){
    gulp.src(`app.dist`)
        .pipe(clean());
    done();
});