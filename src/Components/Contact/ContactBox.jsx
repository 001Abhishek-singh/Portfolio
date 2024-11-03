import style from '../../Static/Contact/ContactBox.module.css'
import Message from '../Contact/Message.jsx';
import UserDetails from '../Contact/UserDetails.jsx';
const ContactBox = () =>{
    return <>
    <div className='container-fluid'>
        <div className="row">
            <div className="col-12 col-md-12 my-3">
                <h1 className='mb-2 py-2 px-4 fw-bolder'>Let's Work Together</h1>
                <p className='text-center py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, molestiae vel? Quisquam tempora nihil minima aliquid animi <br /> illo commodi quidem, hic consectetur libero error, soluta nobis, excepturi repellendus maxime cumque.</p>
            </div>
            <div className="col-12 col-md-6 my-3">
                <UserDetails></UserDetails>
            </div>
            <div className="col-12 col-md-6 my-3">
                <Message></Message>
            </div>
        </div>
    </div>
    </>
};
export default ContactBox;