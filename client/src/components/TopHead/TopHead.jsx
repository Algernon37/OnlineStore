import style from './style/TopHead.module.sass'
import { Link } from 'react-router-dom';

const TopHead = ({ 
    title,
    hide = false,
    FirstBreadcrumb = 'HOME',
    SecondBreadcrumb = 'MEN',
    ThirdBreadcrumb = 'NEW ARRIVALS',
}) => {
    return (
        <div className={`${style.topHead} ${style.center}`} >
            <h2 className={style.topHead__heading}>
                {title}
            </h2>
            {hide ? null :
                (
                    <nav className={style.breadcrumbs}>
                        <ul className={style.breadcrumbs__ul}>
                            <li className={style.breadcrumbs__li}><Link to={'/'} className={style.breadcrumbs__link}>{FirstBreadcrumb}</Link></li>
                            <li className={style.breadcrumbs__li}><Link to={'/'} className={style.breadcrumbs__link}>{SecondBreadcrumb}</Link></li>
                            <li className={style.breadcrumbs__li}><Link to={'/catalog'} className={style.breadcrumbs__link}>{ThirdBreadcrumb}</Link></li>
                        </ul>
                    </nav>
                )}
        </div>
    );
}

export default TopHead;