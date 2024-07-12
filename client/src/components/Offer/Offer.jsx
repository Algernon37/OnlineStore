import style from './style/Offer.module.sass'
import forWomenImg from '../../../public/img/MainPage/for__women.jpg'
import forMenImg from '../../../public/img/MainPage/for__men.jpg'
import forKidsImg from '../../../public/img/MainPage/for__kids.jpg'
import accessoriesImg from '../../../public/img/MainPage/accesories.jpg'

const Products = () => {
    return (
        <>
            <div className={style.offer}>
                <div className={style.offer__inner}>
                    <div className={style.offer__cards}>
                        <img src={forWomenImg} alt="женщина" className={style.offer__img} />
                        <p className={style.offer__text}>
                            <span className={style.Typography__offer}>30% OFF</span>
                            <br />
                            <span className={style.for}>FOR WOMEN</span>
                        </p>
                    </div>
                    <div className={style.offer__cards}>
                        <img src={forMenImg} alt="мужчина" className={style.offer__img} />
                        <p className={style.offer__text}>
                            <span className={style.Typography__offer}>HOT DEAL</span>
                            <br />
                            <span className={style.for}>FOR MEN</span>
                        </p>
                    </div>
                    <div className={style.offer__cards}>
                        <img src={forKidsImg} alt="ребёнок" className={style.offer__img} />
                        <p className={style.offer__text}>
                            <span className={style.Typography__offer}>NEW ARRIVALS</span>
                            <br />
                            <span className={style.for}>FOR KIDS</span>
                        </p>
                    </div>
                    <div className={style.offer__big__card}>
                        <img src={accessoriesImg} alt="аксессуары" className={style.offer__img} />
                        <p className={style.offer__text}>
                            <span className={style.Typography__offer}>LUXIROUS & TRENDY</span>
                            <br />
                            <span className={style.for}>ACCESORIES</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products