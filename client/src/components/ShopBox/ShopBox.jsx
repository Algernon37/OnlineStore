import style from './style/ShopBox.module.sass'
import { Link } from 'react-router-dom';

function ShopBox() {
    return (
        <div className={`${style.shopBox} ${style.center}`}>
            <div className={style.shopCards}>
                <div className={style.buttons}>
                    <button className={style.button} id="clearCartButton">
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
                        <button className={style.button__order}>
                            <p className={style.button__order_text}>GET A QUOTE</p>
                        </button>
                    </div>
                </div>
                <div className={style.shipp__buying}>
                    <div className={style.buying}>
                        <div className={style.buying__cost}>
                            <h3 className={style.buying__title_small}>SUB TOTAL <span className={style.buying__price}></span></h3>
                            <h1 className={style.buying__title_big}>GRAND TOTAL <span className={style.buying__price_total}></span></h1>
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



