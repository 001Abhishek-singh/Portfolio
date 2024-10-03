import style from '../../Static/Contact/UserDetails.module.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import Button from '../Project/Button.jsx';
import { buttonlist } from '../Project/ProjectList.jsx';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const UserDetails = () => {
    return <>
    <div>
        <div className={style['Contactdetails-style']}>
            <div>
                <p>
                    <IoCall className={style['UserDetails-Icons-style']}/>
                    <span className={style['Contactdetails-Span-style']}>Call: </span>
                </p>
                <h5>+91 - 7065956881</h5>
            </div>
        </div>

        <br />
        
        <div className={style['Contactdetails-style']}>
            <div>
                <p>
                    <MdEmail className={style['UserDetails-Icons-style']}/> 
                    <span className={style['Contactdetails-Span-style']}>Email: </span>
                </p>
                <h5>001abhishek287@gmail.com</h5>
            </div>
        </div>
        
        <br />

        <div className={style['Contactdetails-style']}>
            <div>
                <p>
                    <FaLocationDot className={style['UserDetails-Icons-style']}/> 
                    <span className={style['Contactdetails-Span-style']}>Address: </span>
                </p>
                <h5>Laxmi Nagar, New Delhi - 110092</h5>
            </div>
        </div>
        
        <br />
        
        <div className={style['Contactdetails-style']}>
            <div>
                <p> 
                    <span className={style['Contactdetails-Span-style']}>Follow me: </span>
                </p>
                
                <p className='d-flex justify-content-around align-items-center'>
                    <span>
                        <FaLinkedin className={style['UserDetails-Icons-style']}/>
                    </span>
                    <span>
                        <FaGithub className={style['UserDetails-Icons-style']}/> 
                    </span>
                    <span>
                        <IoLogoInstagram className={style['UserDetails-Icons-style']}/> 
                    </span>
                    <span>
                        <BsTwitterX className={style['UserDetails-Icons-style']}/> 
                    </span>
                </p>
            </div>
        </div>
        
        <div className='d-flex justify-content-center align-items-center my-3 py-2'>
            <Button>{buttonlist[9]}</Button>
        </div>
        
    </div>
    </>
};
export default UserDetails;