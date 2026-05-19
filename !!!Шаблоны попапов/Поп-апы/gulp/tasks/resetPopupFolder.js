import gulpClean from "gulp-clean";
import { nameFolder } from "./nameFolder.js";

export const resetPopupFolder = () => {
    const name = nameFolder();
    return app.gulp.src(`./${name}`, {allowEmpty: true})
        .pipe(gulpClean())
}