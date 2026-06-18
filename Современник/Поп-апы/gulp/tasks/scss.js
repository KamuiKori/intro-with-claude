import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename  from "gulp-rename";
import autoprefixer from "gulp-autoprefixer";
import gcmq from "gulp-group-css-media-queries"

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss)
        .pipe(sass())
        .pipe(rename({
            extname: '.css'
        }))
        .pipe(gcmq())
        .pipe(autoprefixer())
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}