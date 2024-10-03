import style from "../../Static/EduAndExperi/Education.module.css"
const Education =()=>{
    return <>
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
                            <h2 className={style["edu_h2_style"]}>Bachelor of Technology</h2>
                            <h4 className={style["edu_h4_style"]}>in <span>Electrical Engineering (2020 - 2024)</span></h4>
                            <p className={style["edu_para_style"]}>Guru Jambheshwar University of Science & Technology <br/> <span>Hisar, Haryana - 125001</span> </p>
                        </div>
                        <div className={style["card"]}>
                            <h2 className={style["edu_h2_style"]}>Senior Secondary (class 12th)</h2>
                            <h4 className={style["edu_h4_style"]}>in <span>PCMB (2017 - 2019)</span></h4>
                            <p className={style["edu_para_style"]}>Dr. Rajendra Prasad Sarvodaya Vidyalaya <br/> <span>President Estate's, New Delhi - 110004</span> </p>
                        </div>
                        <div className={style["card"]}>
                            <h2 className={style["edu_h2_style"]}>Matriculation (class 10th)</h2>
                            <h4 className={style["edu_h4_style"]}>in <span>(2015 - 2017)</span></h4>
                            <p className={style["edu_para_style"]}>Rajkiya Sarvodaya Bal Vidyalaya <br /> <span>Shakarpur, New Delhi - 110092</span> </p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    </>
};
export default Education;