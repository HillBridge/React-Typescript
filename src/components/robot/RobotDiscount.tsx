import useAddToCart from '../hooks/AddToCart'
import styles from './Robot.module.css'
import RobotItem from './RobotItem'

interface RobotDiscountProps {
  id: number
  name: string
  email: string
}

function RobotDiscount({ id, name, email }: RobotDiscountProps) {
  const { addShoppingCart, username, theme } = useAddToCart()
    return (
      <>
        <div style={{ backgroundColor: theme === 'light' ? 'white' : 'black' }}>
          <RobotItem key={id} id={id} name={name} email={email}>
              <button className={styles.buy} onClick={() => addShoppingCart({ id: id, name: name })}>加入购物车<span className={styles.discount}>打折</span></button>
              <p>作者: {username}</p>
          </RobotItem>
        </div>
      </>
    )
}

export default RobotDiscount
