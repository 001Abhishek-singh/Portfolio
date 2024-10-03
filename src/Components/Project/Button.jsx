import style from "../../Static/Project/Button.module.css"
const Button = (props) => {
    return <>
    <div className={style["buttonContainer"]}>
        <button className={style["PortfolioButton"]}>{props.children}</button>
    </div>
    </>
};
export default Button;