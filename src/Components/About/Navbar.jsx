import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import style from '../../Static/About/Navbar.module.css'
const Navbar = ({lightMode, setlightMode}) =>{
    const toggle_Theme = () =>{
        lightMode=='light'?setlightMode('dark'):setlightMode('light');
    }
    return <>
    <div className="container-fluid">
        <div className="row d-flex justify-content-evenly align-items-center text-center py-3">
            <div className="col-3">
                <h1>Abhishek</h1>
            </div>
            <div className="col-6">
                <ul className={style['listStyling']}>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Education</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="col-3">
                {lightMode == 'light'?<MdDarkMode className={style['themeModesize']} onClick={()=>{toggle_Theme()}}/>:<MdLightMode className={style['themeModesize']} onClick={() =>{toggle_Theme()}}/>}
            </div>
        </div>
    </div>
    </>
}
export default Navbar;
