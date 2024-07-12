import style from './style/Intro.module.sass'
import intro from '../../../public/img/MainPage/intro.png';

const Intro = ({introRef}) => {
    return (
        <>
            <div className={style.intro} id="intro" ref={introRef}>
                <img src={intro} alt="photo__intro" className={style.intro__img}></img>
                <div className={style.intro__content}>
                    <div className={style.intro__info}>
                        <h1 className={style.intro__text}>
                            <span className={style.Typography}>THE BRAND</span><br></br>
                            <span className={style.f_luxerious}> OF LUXERIOUS</span> <span className={style.Fashion}>FASHION</span>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro
