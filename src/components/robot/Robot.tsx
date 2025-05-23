
import withAddToCart, { type RobotProps } from '../hoc/AddToCart'
import styles from './Robot.module.css'
import RobotItem from './RobotItem'

function Robot({ id, name, email, username, theme, addShoppingCart }: RobotProps) {
  return (
    <div style={{ backgroundColor: theme === 'light' ? 'white' : 'black' }}>
      <RobotItem key={id} id={id} name={name} email={email}>
        <button className={styles.buy} onClick={() => addShoppingCart({ id, name })}>加入购物车</button>
        {username && <p>作者: {username}</p>}
      </RobotItem>
    </div>
  )
}

  export default withAddToCart(Robot)
