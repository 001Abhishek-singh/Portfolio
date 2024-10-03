import style from "../../Static/EduAndExperi/Experience.module.css"
const Experience = () => {
    return <>
    {/* <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur consequuntur nulla asperiores eaque! Officia molestias nisi nam. Nihil, dolores distinctio?</p>
    </div>
    <div className="exp-container">
        <div>
            <h2>Web Development Intern (Feb 2024 - Aug 2024)</h2>
            <h3>QualifyEd Edutech Pvt. Ltd. <span><u>Full Time</u></span></h3>
            <p>Kalkaji, New Delhi - 110019</p>
        </div>
        <div>
            <h2>Educator (Mar 2024 - July 2024)</h2>
            <h3>Vcare Technical Institute. <span><u>Part Time</u></span></h3>
            <p>Nirman Vihar, New Delhi - 110092</p>
        </div>
        <div>
            <h2>Educator (Aug 2024 - Present)</h2>
            <h3>Samyak It Solutions Pvt. Ltd. <span><u>Part Time</u></span></h3>
            <p>Preet Vihar, New Delhi - 110092</p>
        </div>
    </div> */}

    <div className={style["timeline"]}>
        <p className={style["title-style"]}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus expedita quidem quos voluptatem fugiat impedit sapiente omnis est praesentium libero!</p>
        <div className={style["box"]}>
            <div className={style["container"]}>
                <div className={style["lines"]}>
                    <div className={style["dot"]}></div>
                    <div className={style["line"]}></div>
                    <div className={style["dot"]}></div>
                    <div className={style["line"]}></div>
                    <div className={style["dot"]}></div>
                    <div className={style["line"]}></div>
                </div>
                    <div className={style["cards"]}>
                        <div className={style["card"]}>
                            <h2 className={style["edu_h2_style"]}>Web Development Intern</h2>
                            <h4 className={style["edu_h4_style"]}>QualifyEd Edutech Pvt. Ltd. (Feb 2024 - Aug 2024)</h4>
                            <p className={style["edu_para_style"]}>Kalkaji, New Delhi - 110019</p>
                            <span className={style['timings']}><u>Full Time</u></span>
                        </div>

                        <div className={style["card"]}>
                            <h2 className={style["edu_h2_style"]}>Educator</h2>
                            <h4 className={style["edu_h4_style"]}>Vcare Technical Institute. (Mar 2024 - July 2024)</h4>
                            <p className={style["edu_para_style"]}>Nirman Vihar, New Delhi - 110092</p>
                            <span className={style['timings']}><u>Part Time</u></span>
                        </div>
                        <div className={style["card"]}>
                            <h2 className={style["edu_h2_style"]}>Educator</h2>
                            <h4 className={style["edu_h4_style"]}>Samyak It Solutions Pvt. Ltd. (Aug 2024 - Present)</h4>
                            <p className={style["edu_para_style"]}>Preet Vihar, New Delhi - 110092</p>
                            <span className={style['timings']}><u>Part Time</u></span>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    </>
};
export default Experience;