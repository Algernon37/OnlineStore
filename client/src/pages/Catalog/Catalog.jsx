import style from './style/Catalog.module.sass'
import Header from '../../components/Header/Header'
import TopHead from '../../components/TopHead/TopHead'
import FilterSort from '../../components/FilterSort/FilterSort'
import Products from '../../components/Products/Products'
import Pagination from '../../components/Pagination/Pagination'
import Footer from '../../components/Footer/Footer'
import { useRef, useState } from 'react';

function Catalog() {
    const introRef = useRef(null);
    const limitOfCardsOnThePage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={style.body}>
            <Header introRef={introRef} />
            <TopHead tittle={'NEW ARRIVALS'}/>
            <FilterSort introRef={introRef} />
            <Products
                limit={limitOfCardsOnThePage}
                currentPage={currentPage}
                setTotalPages={setTotalPages}
            />
            {totalPages === 0 ? (
                null
            ) : (
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            )}
            <Footer />
        </div>
    );
}

export default Catalog;


