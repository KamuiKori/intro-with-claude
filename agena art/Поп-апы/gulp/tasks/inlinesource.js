import gis from "gulp-inline-source"
import replace from "gulp-replace";
import rename from "gulp-rename";

export const inlinesource = () => {
    var options = {
        compress: false
    };

    return app.gulp.src(`${app.path.build.files}/popup.html`)
        .pipe(replace("./popup/dist/popup.css", "./popup.css"))
        .pipe(replace("./popup/dist/popup.js", "./popup.js"))
        .pipe(gis(options))
        .pipe(replace('\\', '\\\\'))
        .pipe(replace(/(\r\n|\n|\r)/g, '\\\n'))
        .pipe(replace('\'', '\\\''))
        .pipe(replace(/$/, '\\'))
        .pipe(rename('popup.string.html'))
        .pipe(app.gulp.dest(app.path.build.files));
}