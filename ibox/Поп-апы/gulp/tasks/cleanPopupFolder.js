import { nameFolder } from "./nameFolder.js";

export const cleanPopupFolder = () => {
    const name = nameFolder();
    return app.gulp.src(`./${name}/popup/dist/popup.compiled.js`)
        .pipe(app.gulp.dest(`./${name}/popup`))
}