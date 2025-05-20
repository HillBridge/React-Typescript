import React from 'react'
import styles from './ShoppingCart.module.css'

interface ShoppingCartProps {
    children?: React.ReactNode
}

interface ShoppingCartState {
    isOpen: boolean
}

class ShoppingCart extends React.Component<ShoppingCartProps, ShoppingCartState> {
    constructor(props: ShoppingCartProps) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    render() {
        return <div className={styles.cardContainer}>
            <button className={styles.button} onClick={() => this.setState({isOpen: !this.state.isOpen})}>购物车2件</button>
            <div className={styles.cardDropDown} style={{display: this.state.isOpen ? 'block' : 'none'}}>
                <ul>
                    <li>robot1</li>
                    <li>robot2</li>
                </ul>
            </div>
        </div>
    }
}

export default ShoppingCart
