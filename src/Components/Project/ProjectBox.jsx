import style from "../../Static/Project/ProjectBox.module.css"
import { buttonlist } from "../Project/ProjectList.jsx";
import Project from "../Project/Project.jsx";
import Button from "../Project/Button.jsx";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const ProjectBox = () =>{
    
    return <>
    <div>
        <Project />
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center py-2">
                <div className="col-6 col-md-6">
                    <Link to="https://github.com/001Abhishek-singh">
                        <Button>{buttonlist[1]}</Button>
                    </Link>
                </div>
                <div className="col-6 col-md-6">
                <Link to="https://leetcode.com/u/001abhishek287/">
                    <Button>{buttonlist[2]}</Button>
                </Link>
                </div>
            </div>
        </div>
    </div>
    </>
};
export default ProjectBox;