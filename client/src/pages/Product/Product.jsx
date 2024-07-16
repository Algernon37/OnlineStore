import style from './style/Product.module.sass'
import Header from '../../components/Header/Header'
import TopHead from '../../components/TopHead/TopHead'
import Products from '../../components/Products/Products'
import Footer from '../../components/Footer/Footer'
import ProductSliderPart from '../../components/ProductSliderPart/ProductSliderPart'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Product() {
    const { id } = useParams();
    const products = useSelector((state) => state.products.products);
    const productId = Number(id);

    console.log('All products:', products); 

    const product = products.find((product) => product.id === productId);
    console.log('Found product:', product);

    const limitOfCardsOnThePage = 2;
    return (
        <div className={style.body}>
            <Header />
            <TopHead />
            <ProductSliderPart product={product} />
            <Products limit={limitOfCardsOnThePage} />
            <Footer />
        </div>
    );
}

export default Product;