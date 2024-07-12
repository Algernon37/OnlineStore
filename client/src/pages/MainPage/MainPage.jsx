import style from './style/MainPage.module.sass'
import Products from '../../components/Products/Products'
import Header from '../../components/Header/Header'
import Intro from '../../components/Intro/Intro'
import Offer from '../../components/Offer/Offer'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import { useRef,useEffect } from 'react';

function MainPage() {
    const introRef = useRef(null);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className={style.body}>
            <Header introRef={introRef} />
            <Intro introRef={introRef} />
            <Offer />
            <Products />
            <Button />
            <Footer />
        </div>
    );
}

export default MainPage;
