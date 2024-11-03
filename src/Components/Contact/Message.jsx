import style from '../../Static/Contact/Message.module.css'
import { buttonlist } from '../Project/ProjectList.jsx';
import Button from '../Project/Button.jsx';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Message = () =>{

    const [currentValue, setcurrentValue] =  useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e9f828b8-b30e-4245-ba8e-09c10d98d5c8");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully.",
                icon: "success"
              });
        }
      };
    

    return <>
        <form  onSubmit={onSubmit}  method='POST' className='my-5'>

        <div className={style["grid-container"]}>
            <div className={style["item1"]}>
                <input type="text" name="name" placeholder='Name' className={style['inputStyle']} required value={currentValue} onChange={(event) => setcurrentValue(event.target.value)}/>
            </div>
            <div className={style["item2"]}>
                <input type="text" name="email" placeholder='Email' className={style['inputStyle']} required />
            </div>
            <div className={style["item3"]}>
                <input type="text" name="subject" placeholder='Subject' className={style['inputStyle']} required />    
            </div>  
            <div className={style["item4"]}>
                <textarea name="message" placeholder='Message' className={style['inputStyle']} required  ></textarea>
            </div>
        </div>
            <div className='d-flex justify-content-center align-items-center my-5'>
                <Button type="submit">{buttonlist[5]}</Button>
            </div>
        </form>

    </>
};
export default Message;