import style from '../../Static/Skills/Progressbar.module.css'
import { useState } from 'react';
const Progressbar = ({skillslist1, skillslist2}) => {
    const[value, setvalue] = useState(true);
    const handleOnChange = () =>{
        console.log(value);
        setvalue(!value);
    };
    return <>
    <div className="container mx-auto mt-4">
        <div className="row py-2">
            {
                skillslist1.map((values) => (
                <div className="col-md-3" key={skillslist1.indexOf(values)}>
                    <div className={`${style.card}`} >
                        <div className={`${style.imageContainer}`}>
                            <img src={values.images} className={`${style.card_img_top}`} alt="..." />
                        </div>
                        <div className={`${style.card_body}`}>
                            <h5 className={`${style.card_title}`}>{values.tech}</h5>

                            <div className={`${style.ProgressContainer}`}>
                            
                            <div className={`${style.rating_progress_bars} p-3`}>
                                <div className={`${style.progress_1} align-items-center`}>
                                    <div className={`${style.progress}`}>
                                        <div className={`${style.progress_bar} bg-warning`} role="progressbar" style={{width: "30%;"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{values.percent}</div>
                                    </div>
                                </div>
                            </div>

                                {/* <h6 className={`${style.card_subtitle} mb-2`}>{values.percent}</h6>
                                <div className={`${style.progressBar}`}>hello i am progress</div> */}
                            </div>
                        </div>
                        </div>
                </div>  
            ))
            }  
        </div>
            {/* 2nd skills list */}
            {!value? 
        <div className="row py-2">
            {
                skillslist2.map((values) => (
                <div className="col-md-3" key={skillslist2.indexOf(values)}>
                    <div className={`${style.card}`}>
                        <div className={`${style.imageContainer}`}>
                        <img src={values.images} className={`${style.card_img_top}`} alt="..." />
                        </div>
                        <div className={`${style.card_body}`}>
                            <h5 className={`${style.card_title}`}>{values.tech}</h5>

                            <div className={`${style.ProgressContainer}`}>

                            <div className={`${style.rating_progress_bars} p-3`}>
                                <div className={`${style.progress_1} align-items-center`}>
                                    <div className={`${style.progress}`}>
                                        <div className={`${style.progress_bar} bg-warning`} role="progressbar" style={{width: "30%;"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{values.percent}</div>
                                    </div>
                                </div>
                            </div>
                                {/* <h6 className={`${style.card_subtitle} mb-2`}>{values.percent}</h6>
                                <div className={`${style.progressBar}`}>hello i am progress</div> */}
                            </div>
                        </div>
                    </div>
                </div>  
                ))
            } 
        </div> : ""}

        <button onClick={handleOnChange}>{!value ? 'Hide' : 'See More'}</button>
    </div>



    {/* <div classNameName="progressContainer">
        <div>
            <div classNameName="textAndPercent">
                {skillslist1.map((values) => (
                    <div>
                        <p>
                            <span key={skillslist1.indexOf(values)}>{values.tech}</span>
                            <span key={values.tech}>{values.percent}</span>
                        </p>
                        <div classNameName="progressBar">hello i am progress</div>
                    </div>
                ))}
            </div>
            <div classNameName="textAndPercent">
                {skillslist2.map((values) => (
                    <div>
                        <p>
                            <span key={skillslist2.indexOf(values)}>{values.tech}</span>
                            <span key={values.tech}>{values.percent}</span>
                        </p>
                        <div classNameName="progressBar">hello i am progress</div>
                    </div>
                ))}
            </div>
        </div>
    </div> */}
    </>
};
export default Progressbar;

