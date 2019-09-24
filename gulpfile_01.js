let gulp = require("gulp");

gulp.task("hello",function(done){
    console.log("hello");
    done();
});

gulp.task("hi",function(done){
    console.log("hi");
    done();
});

gulp.task("somejobs", gulp.series("hi", "hello"));