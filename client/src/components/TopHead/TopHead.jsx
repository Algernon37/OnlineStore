import style from './style/TopHead.module.sass'
import { Link } from 'react-router-dom';

function TopHead() {

    return (
        <div className={style.topHead}>
            <h2 className={style.topHead__heading}>
                NEW ARRIVALS
            </h2>
            <nav className={style.breadcrumbs}>
                <ul className={style.breadcrumbs__ul}>
                    <li className={style.breadcrumbs__li}><Link to={'/'} className={style.breadcrumbs__link}>HOME</Link></li>
                    <li className={style.breadcrumbs__li}><Link to={'/'} className={style.breadcrumbs__link}>MEN</Link></li>
                    <li className={style.breadcrumbs__li}><Link to={'/catalog'} className={style.breadcrumbs__link}>NEW ARRIVALS</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default TopHead;