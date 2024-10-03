import style from "../../Static/Project/ProjectBox.module.css"
import { buttonlist } from "../Project/ProjectList.jsx";
import Project from "../Project/Project.jsx";
import Button from "../Project/Button.jsx";
const ProjectBox = () =>{
    return <>
    <div>
        <Project />
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center py-2">
                <div className="col-6 col-md-6">
                <Button>{buttonlist[1]}</Button>
                </div>
                <div className="col-6 col-md-6">
                <Button>{buttonlist[2]}</Button>
                </div>
            </div>
        </div>
    </div>
    </>
};
export default ProjectBox;