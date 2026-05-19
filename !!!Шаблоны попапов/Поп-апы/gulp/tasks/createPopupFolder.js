import { nameFolder } from "./nameFolder.js";

export const createPopupFolder = () => {
    const name = nameFolder();
    return app.gulp.src('./popup/**/*.*')
        .pipe(app.gulp.dest(`./${name}/popup`))
}