import gulpClean from "gulp-clean";
import { nameFolder } from "./nameFolder.js";

export const cleanPopupDistFolder = () => {
    const name = nameFolder();
    return app.gulp.src(`./${name}/popup/dist`)
        .pipe(gulpClean())
}