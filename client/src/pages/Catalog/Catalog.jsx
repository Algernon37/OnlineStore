import style from './style/Catalog.module.sass'
import Header from '../../components/Header/Header'
import TopHead from '../../components/TopHead/TopHead'
import FilterSort from '../../components/FilterSort/FilterSort'
import { useRef } from 'react';

function Catalog() {
    const introRef = useRef(null);

    return (
        <div className={style.body}>
            <Header introRef={introRef} />
            <TopHead />
            <FilterSort introRef={introRef}/>
        </div>
    );
}

export default Catalog;