import style from './style/Product.module.sass'
import Header from '../../components/Header/Header'
import TopHead from '../../components/TopHead/TopHead'
import Products from '../../components/Products/Products'
import Footer from '../../components/Footer/Footer'
import AboutUs from '../../components/AboutUs/AboutUs'
import ProductSliderPart from '../../components/ProductSliderPart/ProductSliderPart'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Product() {
    const { id } = useParams();
    const products = useSelector((state) => state.products.products);
    const productId = Number(id);
    const product = products.find((product) => product.id === productId);

    const limitOfCardsOnThePage = 3;
    return (
        <div className={style.body}>
            <Header />
            <TopHead tittle={'NEW ARRIVALS'}/>
            <ProductSliderPart product={product} />
            <Products limit={limitOfCardsOnThePage} />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default Product;