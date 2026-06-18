import gulp from 'gulp';

//Импорт путей
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
};

//Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { scssDel } from "./gulp/tasks/delScss.js";
import { js } from "./gulp/tasks/js.js";
import { inlinesource } from "./gulp/tasks/inlinesource.js";
import { insertstring } from "./gulp/tasks/insertstring.js";
import { resetPopupFolder } from "./gulp/tasks/resetPopupFolder.js";
import { createPopupFolder } from "./gulp/tasks/createPopupFolder.js";
import { cleanPopupFolder } from "./gulp/tasks/cleanPopupFolder.js";
import { cleanPopupDistFolder } from "./gulp/tasks/cleanPopupDistFolder.js";

//Наблюдатели
function watcher() {
    gulp
      .watch(
        [path.watch.html,path.watch.scss,path.watch.js],
        mainTask
      )
      .on("change", app.plugins.browsersync.reload);
}

//Основные задачи
const mainTask = gulp.series(copy, scss, scssDel, js);

//Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTask, inlinesource, insertstring, resetPopupFolder, createPopupFolder, cleanPopupFolder, cleanPopupDistFolder);

//Выполнение сценария по умолчанию
gulp.task('watch', dev);
gulp.task('build', build);