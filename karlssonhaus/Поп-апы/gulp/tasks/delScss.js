import del from "del";

export const scssDel = () => {
    return del(`${app.path.build.css}/popup.scss`)
}