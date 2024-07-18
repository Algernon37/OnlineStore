import style from './style/ShopBox.module.sass'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductsInCart from '../ProductsInCart/ProductsInCart';
import { clearCart } from '../../store/productsInCart';
import { useState, useEffect } from 'react';

const ShopBox = () => {
    const dispatch = useDispatch();
    const productsInCart = useSelector(state => state.productsInCart.products);
    const [subtotal, setSubtotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        productsInCart.forEach(product => {
            total += product.price * product.quantity;
        });
        setSubtotal(total);
        setGrandTotal(total);
    }, [productsInCart]);

    const handleClearCartClick = () => {
        dispatch(clearCart());
    };
    const handleGetQuoteClick = () => {
        const inputs = document.querySelectorAll(`.${style.order__form_input}`);
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                input.classList.add(style.emptyInput);
                allFilled = false;
            } else {
                input.classList.remove(style.emptyInput);
            }
        });
        if (allFilled) {
            console.log('Getting a quote...');
        }
    };

    return (
        <div className={`${style.shopBox} ${style.center}`}>
            <div className={style.shopCards}>
                <ProductsInCart />
                <div className={style.buttons}>
                    <button className={style.button} id="clearCartButton" onClick={handleClearCartClick}>
                        <p className={style.button__text}>CLEAR SHOPPING CART</p>
                    </button>
                    <Link to="/catalog">
                        <button className={style.button}>
                            <p className={style.button__text}>CONTINUE SHOPPING</p>
                        </button>
                    </Link>
                </div>
            </div>
            <div className={style.shipp}>
                <div className={style.order}>
                    <h1 className={style.order__title}>SHIPPING ADDRESS</h1>
                    <div className={style.order__form}>
                        <div className={style.order__form_inputs}>
                            <input className={style.order__form_input} type="text" placeholder="Bangladesh" />
                            <input className={style.order__form_input} type="text" placeholder="State" />
                            <input className={style.order__form_input} type="text" placeholder="Postcode / Zip" />
                        </div>
                        <button className={style.button__order} onClick={handleGetQuoteClick}>
                            <p className={style.button__order_text}>GET A QUOTE</p>
                        </button>
                    </div>
                </div>
                <div className={style.shipp__buying}>
                    <div className={style.buying}>
                        <div className={style.buying__cost}>
                            <h3 className={style.buying__title_small}>SUB TOTAL <span className={style.buying__price}>{subtotal}$</span></h3>
                            <h1 className={style.buying__title_big}>GRAND TOTAL <span className={style.buying__price_total}>{grandTotal}$</span></h1>
                        </div>
                        <button className={`${style.button} ${style.button__proceed}`}>
                            <p className={style.button__proceed_text}>PROCEED TO CHECKOUT</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopBox;



