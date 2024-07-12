import { Link } from 'react-router-dom';
import style from './style/Button.module.sass'

const Button = () => {
    return (
        <>
            <div className={style.button__container}>
                <Link to="./catalog" className={style.button}>
                    <p className={style.button__text}> Browse All Product</p>
                </Link>
            </div>
        </>
    )
}

export default Button
