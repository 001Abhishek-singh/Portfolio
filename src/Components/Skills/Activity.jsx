import style from '../../Static/Skills/Activity.module.css'
const Activity = (props) =>{
    return <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 col-md-12">{props.children}</div>
        </div>

    </div>
    </>
}
export default Activity