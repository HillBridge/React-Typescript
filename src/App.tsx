import React from 'react'
import styles from './App.module.css'
import Logo from './assets/images/logo.svg'
import ShoppingCart from './components/cart/ShoppingCart'
import Robot from './components/robot/Robot'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AppProps { }

// 使用any类型来避免类型检查 因为api返回的数据是后端定义的 可能会更改 所以不加类型校验
interface AppState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userList: any[]
}

class App extends React.Component<AppProps, AppState> { 
  constructor(props: AppProps) {
    super(props)
    this.state = {
      userList: []
    }
  }
  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({userList: data}))
  }
  render() { 
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={Logo} className={styles.appLogo} alt="logo" />
          <h1 className={styles.appTitle}>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
        </div>
        <ShoppingCart />
        <Robot userList={this.state.userList} />
    </div>
   )
  }
}

export default App
