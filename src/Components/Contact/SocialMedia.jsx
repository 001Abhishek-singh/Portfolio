import style from '../../Static/Contact/SocialMedia.module.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";
import { Link } from 'react-router-dom';
const SocialMedia = () =>{
    return <>
    <br />
    <div className="container-fluid">
        <div className="row d-flex justify-content-evenly align-items-center text-center py-2">
            <div className="col-4 col-md-5">
                <div>
                    <h1 className="fw-bolder">Abhishek</h1>
                </div>
            </div>
            <div className="col-7 col-md-5">
                <div className='d-flex justify-content-evenly align-items-center text-center'>
                    {/* Linkedin */}
                    <Link to="https://www.linkedin.com/in/abhishek-singh-72ab66251/">
                        <FaLinkedin className={style['social-media-icon-style']} />
                    </Link>
                    {/* Github */}
                    <Link to="https://github.com/001Abhishek-singh">
                        <FaGithub className={style['social-media-icon-style']} />
                    </Link>
                    {/* Instagram */}
                    <Link to="#">
                        <IoLogoInstagram className={style['social-media-icon-style']} />
                    </Link>
                    {/* TwitterX */}
                    <Link to="#">
                        <BsTwitterX className={style['social-media-icon-style']} /> 
                    </Link>
                    {/* Leetcode */}
                    <Link to="https://leetcode.com/u/001abhishek287/">
                        <SiLeetcode className={style['social-media-icon-style']} />
                    </Link>
                    {/* Hackerrank */}
                    <Link to="#">
                        <FaHackerrank className={style['social-media-icon-style']} />
                    </Link>
                </div>
            </div>
            <br />
            <hr />
            <div className="col-12 col-md-12">
                <p class="text-center text-body-primary fw-bold"> <MdCopyright/> 2024 Abhishek-Portfolio</p>
            </div>
        </div>
    </div>
    </>
};
export default SocialMedia;