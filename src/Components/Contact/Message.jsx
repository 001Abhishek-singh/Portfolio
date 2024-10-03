import style from '../../Static/Contact/Message.module.css'
import { buttonlist } from '../Project/ProjectList.jsx';
import Button from '../Project/Button.jsx';

const Message = () =>{
    return <>
        <form action='#' method='POST' className='my-5'>

        <div className={style["grid-container"]}>
            <div className={style["item1"]}>
                <input type="text" id='name' placeholder='Name' className={style['inputStyle']}/>
            </div>
            <div className={style["item2"]}>
                <input type="text" id='email' placeholder='Email' className={style['inputStyle']}/>
            </div>
            <div className={style["item3"]}>
                <input type="text" id='Subject' placeholder='Subject' className={style['inputStyle']}/>    
            </div>  
            <div className={style["item4"]}>
                <textarea name="" id="message" placeholder='Message' className={style['inputStyle']}></textarea>
            </div>
        </div>

        </form>

        <div className='d-flex justify-content-center align-items-center my-5'>
            <Button>{buttonlist[5]}</Button>
        </div>

    </>
};
export default Message;