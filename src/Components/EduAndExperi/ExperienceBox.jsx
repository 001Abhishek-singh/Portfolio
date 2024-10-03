import { useState } from "react";
import EduButton from "../EduAndExperi/EduButton.jsx";

const ExperienceBox = () =>{
    const [currentValue, setcurrentValue] = useState('Experience');

    return <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 col-md-12 my-3">
                <h1 className='mb-2 py-2 px-4 fw-bolder'>My Experience and Education</h1>
                <p className='text-center text-wrap py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, molestiae vel? Quisquam tempora nihil minima aliquid animi <br /> illo commodi quidem, hic consectetur libero error, soluta nobis, excepturi repellendus maxime cumque.</p>
            </div>
            <div className="col-12 col-md-12">
                <EduButton currentValue={currentValue} setcurrentValue={setcurrentValue} />
            </div>
        </div>
    </div>
    
    </>
};
export default ExperienceBox