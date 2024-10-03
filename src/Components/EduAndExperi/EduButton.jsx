import style from '../../Static/EduAndExperi/EduButton.module.css'
import Education from '../EduAndExperi/Education.jsx';
import Experience from '../EduAndExperi/Experience.jsx';
const EduButton = ({currentValue, setcurrentValue}) => {
    const HandleOnClick = (event) => {
        // console.log(event);
        setcurrentValue(event);
    }
    return <>
    {/* <Button>{buttonlist[6]}</Button>
    <Button>{buttonlist[7]}</Button> */}
    
    <div className="container my-3">
        <div className="row text-center">
            <div className={`col-6 col-md-6 ${style.ExpButtonStyle}`}>
                <button id={style['nonActive2']} onClick={() => {HandleOnClick("Experience")}} className={style[`${currentValue === 'Experience' && 'Active'}`]}>Experience</button>
            </div>
            <div className={`col-6 col-md-6 ${style.EduButtonStyle}`}>
                <button id={style['nonActive']} onClick={() => {HandleOnClick("Education")}} className={style[`${currentValue === 'Education' && 'Active'}`]}>Education</button>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-12">
                <div>
                    {currentValue === 'Experience' ? 
                        <Experience />:
                        <Education />
                    }
                </div>
            </div>
        </div>
    </div>
    
    </>
};
export default EduButton;