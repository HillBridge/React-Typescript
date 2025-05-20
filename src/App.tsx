
import styles from './App.module.css'
import Logo from './assets/images/logo.svg'
import ShoppingCart from './components/cart/ShoppingCart'
import Robot from './components/robot/Robot'

function App() {
  return (
    <>
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={Logo} className={styles.appLogo} alt="logo" />
          <h1 className={styles.appTitle}>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
        </div>
        <ShoppingCart />
        <Robot />
     </div>
    </>
  )
}

export default App
