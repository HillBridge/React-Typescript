import React, { useContext } from 'react'
import { GlobalContext } from '../../context/global'
import { ThemeContext } from '../../context/theme'
export interface RobotProps {
  id: number
  name: string
  email: string
  theme: string
  username?: string
  addShoppingCart: (item: { id: number, name: string }) => void
}

const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
  return (props: Omit<RobotProps, 'username' | 'addShoppingCart' | 'theme'>) => {
    const { theme } = useContext(ThemeContext)
    const { username, setShoppingCart } = useContext(GlobalContext)
  
    const addShoppingCart = (item: { id: number, name: string }) => {
      setShoppingCart(item)
    }
    return <ChildComponent {...props} username={username} theme={theme} addShoppingCart={addShoppingCart} />
  }
}

export default withAddToCart
