/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import styles from './ShoppingCart.module.css';

interface ShoppingCartProps { }

interface ShoppingCartState {
    isOpen: boolean,
    count: number
}

class ShoppingCart extends React.Component<ShoppingCartProps, ShoppingCartState> {
    constructor(props: ShoppingCartProps) {
        super(props)
        //setState 是异步更新 同步执行
        this.state = {
            isOpen: false,
            count: 0
        }
    }
    // 为react事件添加类型
    handleClickAddCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        // e.target 是事件的触发者
        // console.log(e.target)
        // e.currentTarget 是事件的绑定者
        // console.log(e.currentTarget)
        // 箭头函数没有this

        if((e.target as HTMLButtonElement).tagName === 'SPAN') {
            this.setState((prevState) => ({isOpen: !prevState.isOpen}))
        }
    }
    render() {
        return <div className={styles.cardContainer}>
            <div>
                <button onClick={() =>  this.setState((prevState) => ({count: prevState.count + 1}))}>点击</button>
                <span>{ this.state.count }</span>
            </div>
            <button className={styles.button} onClick={this.handleClickAddCart}><FiShoppingCart /><span>购物车2件</span></button>
            <div className={styles.cardDropDown} style={{ display: this.state.isOpen ? 'block' : 'none' }}>
                <ul>
                    <li>robot1</li>
                    <li>robot2</li>
                </ul>
            </div>
        </div>
    }
}

export default ShoppingCart
