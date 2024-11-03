import style from "../../Static/Project/Project.module.css"
import { projectlist } from "../Project/ProjectList.jsx";
import Image from "../../assets/project.jpeg";
const Project = () => {
    return <>

    <section className={`${style.light}`}>
        <div className="container py-2">
            <div className="h1 text-center" id={style[`pageHeaderTitle`]}>Projects</div>

            <div>
                {
                    projectlist.map((projectItems) => (
                    <article key={projectItems.ProjectID} className= {`${style.postcard} ${style.light} ${style.yellow}`}>
                    <a className={`${style.postcard__img_link}`} href="#">
                        <img className={`${style.postcard__img}`} src={projectItems.Picture} alt="Image Title" />
                    </a>
                    <div className={`${style.postcard__text} ${style.tdark}`}>
                        <h1 className={`${style.postcard__title} ${style.yellow}`}><a href="#">{projectItems.projectTitle}</a></h1>
                        <div className={`${style.postcard__subtitle} ${style.small}`}>
                            <time datetime="2020-05-25 12:00:00">
                                <i className="fas fa-calendar-alt mr-2"></i>{projectItems.duration} duration
                            </time>
                        </div>
                        <div className={`${style.postcard__bar}`}></div>
                        <div className={`${style.postcard__preview_txt}`}>{projectItems.Description}description Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero.</div>
                        <ul className={`${style.postcard__tagbox}`}>
                            <li className={`${style.tag__item}`}><i className="fas fa-tag mr-2"></i>{projectItems.Result}Result</li>
                            <li className={`${style.tag__item}`}><i className="fas fa-clock mr-2"></i>{projectItems.TechnologyUsed} TechnologyUsed</li>
                            <li className={`${style.tag__item} ${style.play} ${style.yellow}`}>
                                <a href="#"><i className="fas fa-play mr-2"></i>{projectItems.SourceCode} website link</a>
                            </li>
                        </ul>
                    </div>
                    </article>
                ))
                }
            </div>
        </div>
    </section>

    {/* <div>
        {
            projectlist.map((projectItems) => (
                <div key={projectItems.ProjectID}>
                    <div>
                        <div><img src={projectItems.Picture} alt="" /></div>
                        <div>
                            <h3>{projectItems.projectTitle}</h3>
                            <div>
                                <div>
                                <span>{projectItems.TechnologyUsed} TechnologyUsed</span>
                                <span>{projectItems.duration} duration</span>
                                </div>
                                <p>{projectItems.SourceCode} website link</p>
                            </div>
                        </div>
                    </div>

                    after hover effect
                    <div>
                        <div>{projectItems.Description}description</div>
                        <div>
                            <div>{projectItems.ChallengesFaced}Challenges</div>
                            <div>{projectItems.Result}Result</div>
                        </div>
                    </div>

                </div>
            ))
        }


    </div> */}
    </>
};
export default Project;



