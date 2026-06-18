import fs from "fs";

export const nameFolder = () => {
    try {
        var prodFolderName = fs
            .readFileSync(`./popup/src/popup.js`)
            .toString()
            .match(/(?<=cqpopup_name\s\=\s["'`]).*?(?=["'`])/g)[0];
    } catch(err) {
        console.error(`Нет переменной cqpopup_name: ${err}`);
    }
    return prodFolderName
}