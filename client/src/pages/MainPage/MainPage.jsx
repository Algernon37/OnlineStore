import style from './style/MainPage.module.sass'
import Products from '../../components/Products/Products'
import Header from '../../components/Header/Header'
import Intro from '../../components/Intro/Intro'
import Offer from '../../components/Offer/Offer'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import { useRef } from 'react';

function MainPage() {
    const introRef = useRef(null);
    const limitOfCardsOnThePage = 6;

    return (
        <div className={style.body}>
            <Header introRef={introRef} />
            <Intro introRef={introRef} />
            <Offer />
            <div className={style.products__start}>
                <h1 className={style.products__title}>Featured Items</h1>
                <p className={style.products__text}>Shop for items based on what we featured this week</p>
            </div>
            <Products
                limit={limitOfCardsOnThePage}
            />
            <Button />
            <Footer />
        </div>
    );
}

export default MainPage;
