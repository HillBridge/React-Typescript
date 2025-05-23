/* eslint-disable @typescript-eslint/no-empty-object-type */
import React, { useContext, useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { GlobalContext } from '../../context/global';
import styles from './ShoppingCart.module.css';

interface ShoppingCartProps {}

// interface ShoppingCartState {
//     isOpen: boolean,
//     count: number
// }

const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  // 对state状态定义类型
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  //setState 是异步更新 同步执行
  // this.state = {
  //         isOpen: false,
  //         count: 0
  //     }
  // }
  // 为react事件添加类型
  const handleClickAddCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    // e.target 是事件的触发者
    // console.log(e.target)
    // e.currentTarget 是事件的绑定者
    // console.log(e.currentTarget)
    // 箭头函数没有this

    if ((e.target as HTMLButtonElement).tagName === 'SPAN') {
      setIsOpen(!isOpen);
    }
  };
  // useEffect 是react的副作用函数 在组件挂载后执行
  // 当第二个参数有值时 相当于类组件的componentDidUpdate
  // 当第二个参数没有值时 相当于类组件的componentDidMount
  // 当第二个参数什么也不传时, 会在每次render后执行, 要防止死循环一直调用
  // 一个组件中可以写多个useEffect
  useEffect(() => {
    document.title = `点击了${count}次`;
  }, [count]);

  // 组件卸载前的执行函数
  // useEffect(() => {
  //     return () => {
  //         console.log('组件卸载')
  //     }
  // }, [])

  const { shoppingCart } = useContext(GlobalContext);
  return (
    <div className={styles.cartContainer}>
      <div>
        <button onClick={() => setCount(count + 1)}>点击</button>
        <span>{count}</span>
      </div>
      <button className={styles.button} onClick={handleClickAddCart}>
        <FiShoppingCart />
        <span>购物车{shoppingCart.item.length}件</span>
      </button>
      <div className={styles.cartDropDown} style={{ display: isOpen ? 'block' : 'none' }}>
        <ul>
          {shoppingCart.item.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingCart;
