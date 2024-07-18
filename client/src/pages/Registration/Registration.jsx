import style from './style/Registration.module.sass'
import Header from '../../components/Header/Header'
import TopHead from '../../components/TopHead/TopHead'
import Footer from '../../components/Footer/Footer'
import RegistrationInner from '../../components/RegistrationInner/RegistrationInner'

function Registration() {
    return (
        <div className={style.body}>
            <Header />
            <TopHead
                title={'REGISTRATION'}
                hide={true}
            />
            <RegistrationInner />
            <Footer />
        </div>
    );
}

export default Registration;