import rename from "gulp-rename";
import fileinclude from "gulp-file-include";

export const insertstring = () => {
    return app.gulp.src(['./template.js'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent: true
        }))
        .pipe(rename('popup.compiled.js'))
        .pipe(app.gulp.dest(app.path.build.files));
};