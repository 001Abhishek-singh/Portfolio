import style from '../../Static/About/About.module.css'
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import {Cursor} from 'react-simple-typewriter';
import Abhishek from '../../assets/Abhishek_Profile_QualifyEd_1.jpg';
import Button from '../Project/Button';
import { buttonlist } from '../Project/ProjectList';
import resume from '../../assets/Abhishek_Electrical.pdf';
const About = ({playmode, setplaymode, text}) =>{

    const Handleplay = ()=>{
        playmode == 'play' ?setplaymode('pause'): setplaymode('play');
    }
    return <>
    <div className="container-fluid">
        <div className="row d-flex justify-content-evenly align-items-center text-center py-2">
            <div className="col-10 col-md-6" >
                <h3>I'm</h3>
                <h1 className={style['userName']}>Abhishek</h1>
                <h3 className={style['jobtype-effect']}>{text}<span><Cursor /></span></h3>
                <div className={style['buttonContainer']}>
                <button className={style["cvButton"]}>
                    <a href={resume} className={style['anchor_style']} download="resume">Download CV</a>
                </button>
                <button className={style["cvButton"]}>
                    {playmode == 'play' ? <FaCirclePause onClick={() => {Handleplay()}}/> : <FaCirclePlay onClick={() => (Handleplay())}/>}
                    Play Video</button>
                </div>
                <div>
                    <div className={style["about-content"]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis nam, quia, doloribus perspiciatis voluptatem eos, fuga fugiat aspernatur rerum quisquam cum ut unde laboriosam excepturi? Nostrum facilis molestias porro dolore ullam illum, fugiat corrupti laborum officia ab, magnam quae exercitationem sint quasi blanditiis dignissimos quisquam itaque doloremque non vitae, impedit aut nisi assumenda vero. Dolores cumque atque veniam officia eveniet distinctio, ipsa minima, libero temporibus laborum necessitatibus placeat tenetur dicta. Placeat error tenetur neque provident et perspiciatis, rerum ut illum magnam suscipit deleniti quisquam non fugiat maxime doloribus perferendis. Quasi consequuntur at neque tempore in esse reprehenderit libero, ipsum recusandae, quia dolorem repudiandae enim! Perspiciatis, repellendus quis rem veniam dolorum labore quia laboriosam, delectus quo inventore sint blanditiis fuga doloremque voluptates iure in amet error consequuntur quae suscipit consectetur alias. Aut dolores illum accusantium modi quia explicabo inventore perferendis? Soluta velit molestiae placeat magnam accusantium! Excepturi vero dignissimos sed. Itaque vero ea incidunt facilis quidem iste soluta libero sed voluptas nobis sunt natus officia repellendus, ratione corrupti. Dolores numquam doloribus quis, fugiat nulla, consectetur nihil eaque cupiditate veritatis, neque culpa laboriosam atque? Deserunt amet quia, accusamus eius eligendi iure fugit dolor animi exercitationem molestias eos, magni suscipit. Corporis, unde.
                    </div>

                </div>

                <div className={style['about-button']}>
                    <Button>{buttonlist[10]}</Button>
                </div>
                    
            </div>
            <div className="col-10 col-md-6">
                <img src={Abhishek} className={style['Portfolio-image']} alt="Abhishek" />
            </div>
        </div>
    </div>
    </>
}
export default About