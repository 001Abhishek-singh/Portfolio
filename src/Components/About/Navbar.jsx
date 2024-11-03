import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import style from '../../Static/About/Navbar.module.css'
import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({lightMode, setlightMode}) =>{
    const toggle_Theme = () =>{
        lightMode=='light'?setlightMode('dark'):setlightMode('light');
    }
    // for responsive navbar
    const [openMenu, setopenMenu] = useState(false);
    const handleOpenMenu = () =>{
        console.log(openMenu);
        setopenMenu(!openMenu);
    }
    return <>
    <div className="container-fluid" id={style['header_bg_color']} >
        <div className="row d-flex justify-content-evenly align-items-center text-center py-3">
            {/* theme */}
            <div className={` ${style.theme_box} col-2`}>
                {lightMode == 'light'?<MdDarkMode className={style['themeModesize']} onClick={()=>{toggle_Theme()}}/>:<MdLightMode className={style['themeModesize']} onClick={() =>{toggle_Theme()}}/>}
            </div>
            {/* logo */}
            <div className={`${style.name_box} col-3`}>
                <h1><Link className={style['portfolio_title']} to="">Abhishek</Link></h1>
            </div>
            {/* navbar list */}
            <nav className={`${style.navlistStyle} col-7`}>
                <button className={`${style.nav_btn}`} onClick={handleOpenMenu}>
                    {openMenu ? <FaTimes/> : <FaBars/>}
                </button>
                <ul className={openMenu ?'open':'notopen'}>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Skills">Skills</NavLink></li>
                    <li><NavLink to="/Education">Education</NavLink></li>
                    <li><NavLink to="/Projects">Projects</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                    {/* <button className={`${style.nav_btn} ${style.close_nav_btn}`}>
                        <FaTimes/>
                    </button> */}
                </ul>
            </nav>
            
        </div>
    </div>
    </>
}
export default Navbar;
