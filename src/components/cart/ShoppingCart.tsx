import React from 'react';
// import { FiShoppingCart } from "react-icons/fi";
import styles from './ShoppingCart.module.css';

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
    // 为react事件添加类型
    handleClickAddCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        // e.target 是事件的触发者
        // console.log(e.target)
        // e.currentTarget 是事件的绑定者
        console.log(e.currentTarget)
        // 箭头函数没有this
        this.setState((prevState) => ({isOpen: !prevState.isOpen}))
    }
    render() {
        return <div className={styles.cardContainer}>
            <button className={styles.button} onClick={this.handleClickAddCart}><span>购物车2件</span></button>
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
