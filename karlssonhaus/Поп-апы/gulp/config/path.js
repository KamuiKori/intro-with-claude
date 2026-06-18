//Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./popup/dist`,
      srcFolder = `./popup/src`;

//Общий объект с путями
export const path = {
    build: {
        html: `./`,
        css: `${buildFolder}/`,
        js: `${buildFolder}/`,
        files: `${buildFolder}/`
    },
    src: {
        html: `${srcFolder}/popup.html`,
        scss: `${srcFolder}/popup.scss`,
        js: `${srcFolder}/*.js`,
        files: `${srcFolder}/*.*`
    },
    watch: {
        files: `${srcFolder}/*.*`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/*.scss`,
        js: `${srcFolder}/*.js`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}