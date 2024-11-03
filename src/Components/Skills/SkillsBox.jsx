import style from '../../Static/Skills/SkillsBox.module.css'
import Progressbar from '../Skills/Progressbar.jsx';
import Button from '../Project/Button.jsx';
import { buttonlist } from '../Project/ProjectList.jsx';
import Electrical from '../../assets/Electrical.jpeg';
import C_Language from '../../assets/C_Language.jpeg';
import Java from '../../assets/Java.png';
import Python from '../../assets/Python.png';
import HTML from '../../assets/HTML.jpeg';
import CSS from '../../assets/CSS.jpeg';
import JS from '../../assets/JS.png';
import Bootstrap from '../../assets/Bootstrap.png';
import React_JS from '../../assets/React.png';
import SQL from '../../assets/SQL.png';
import MYSQL from '../../assets/MYSQL.png';
import Django from '../../assets/Django.png';
import IOT from '../../assets/IOT.png';
import FIGMA from '../../assets/Figma.png';
import Git_Github from '../../assets/Git_Github.jpeg';
import DSA from '../../assets/DSA.png';
const SkillsBox = () =>{
    const skillslist1 = [{tech:'Electrical Engineering', percent:'100%', images:Electrical},{tech:'C Language', percent:'75%', images:C_Language},{tech:'Java', percent:'65%', images:Java},{tech:'Python', percent:'75%', images:Python},{tech:'DSA', percent:'35%', images:DSA}, {tech:'HTML5',percent:'91%', images:HTML},{tech:'CSS3',percent:'76%', images:CSS},{tech:'Javascript',percent:'65%', images:JS}]

    const skillslist2 = [{tech:'Bootstrap5',percent:'90%', images:Bootstrap},{tech:'React js',percent:'55%', images:React_JS},{tech:'Sql', percent:'60%', images:SQL},{tech:'MySql', percent:'65%', images:MYSQL},{tech:'Django',percent:'85%', images:Django},{tech:'IoT', percent:'40%', images:IOT}, {tech:'Git/Github',percent:'80%', images:Git_Github}, {tech:'Figma', percent:'60%', images:FIGMA}]

    return <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 col-md-12 my-3">
                <h1 className='mb-2 py-2 px-4 fw-bolder'>My Skills</h1>
                <p className='text-center text-wrap py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, molestiae vel? Quisquam tempora nihil minima aliquid animi <br /> illo commodi quidem, hic consectetur libero error, soluta nobis, excepturi repellendus maxime cumque.</p>
            </div>
            <div className="col-12 col-md-12 py-2 px-2">
                <Progressbar skillslist1={skillslist1} skillslist2={skillslist2} />
            </div>
            <div className='col-12 col-md-12'>
                <Button>
                    {buttonlist[8]}
                </Button>
            </div>
        </div>
    </div>
    </>
};
export default SkillsBox;
