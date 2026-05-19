import babel from "gulp-babel";

export const js = () => {
    return app.gulp.src(app.path.src.js)
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(app.gulp.dest(app.path.build.js))
}