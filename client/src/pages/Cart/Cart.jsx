import style from './style/Cart.module.sass'
import Header from '../../components/Header/Header'
import TopHeard from '../../components/TopHead/TopHead'
import Footer from '../../components/Footer/Footer'
import ShopBox from '../../components/ShopBox/ShopBox'

function Cart() {
    return (
        <div className={style.body}>
            <Header />
            <TopHeard
                title={'SHOPPING CART'}
                ItIsCard={true}
            />
            <ShopBox />
            <Footer />
        </div>
    );
}

export default Cart;