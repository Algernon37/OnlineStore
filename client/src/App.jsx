import AppRouter from './components/Approuter/AppRouter'
import style from './AppStyle/App.module.sass'

function App() {
  return (
    <div className={style.wrapper}>
      <AppRouter />
    </div>
  )
}

export default App
