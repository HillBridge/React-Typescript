import React, { useEffect, useMemo, useState } from 'react'
import styles from './App.module.css'
import Logo from './assets/images/logo.svg'
import ShoppingCart from './components/cart/ShoppingCart'
import Robot from './components/robot/Robot'
import { ThemeContext, type ThemeContextType } from './context/theme'

 
// interface AppProps { }

// 使用any类型来避免类型检查 因为api返回的数据是后端定义的 可能会更改 所以不加类型校验
// interface AppState {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   userList: any[]
// }

const App: React.FC = () => {
  // 初始化组件的生命周期 constructor => getDerivedStateFromProps => render => componentDidMount
  // constructor(props: AppProps) {
  //   super(props)
  //   this.state = {
  //     userList: []
  //   }
  // }

  
  // 主要是监听props的变化 来更新内部的state
  // 会在组件实例化后 render函数执行前被调用 是类组件内部静态的生命周期
  // static getDerivedStateFromProps(props: AppProps, state: AppState): AppState {
  //   return {
  //     userList: []
  //   }
  // }
  // 组件挂载dom后的执行函数
  // componentDidMount(): void {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(data => this.setState({userList: data}))
  // }


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userList, setUserList] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setLoading(true)
    try {
      const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUserList(data)
      }
      fetchData()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      if (e in Error) {
        setError(e.message)
      }
    } finally {
      setLoading(false)
    }
  }, [])


  // 组件更新阶段生命周期 shouldComponentUpdate ==> render ==> componentDidUpdate
  // shouldComponentUpdate 决定是否更新组件
  // shouldComponentUpdate(nextProps: AppProps, nextState: AppState): boolean {
  //   return true
  // }

  // 组件更新后的回调
  // componentDidUpdate(prevProps: AppProps, prevState: AppState): void {
  //   console.log('componentDidUpdate', prevProps, prevState)
  // }

  // 组件卸载前的执行函数
  // componentWillUnmount(): void {
  //   console.log('componentWillUnmount')
  // }
  
  const [theme, setTheme] = useState('light')

  const themeProviderValue: ThemeContextType = useMemo(() => {
    return {
      theme: theme,
      toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }
    }
  }, [theme])

  // 组件更新 执行
  return (
    <ThemeContext.Provider value={themeProviderValue}>
      <div className={styles.app}>
        <div><button onClick={themeProviderValue.toggleTheme}>切换主题</button></div>
        <div className={styles.appHeader}>
          <img src={Logo} className={styles.appLogo} alt="logo" />
          <h1 className={styles.appTitle}>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
        </div>
        <ShoppingCart />
        {error && `报错信息:{error}`}
        {
          loading ? <h2 style={{fontSize: '30px', color: 'orange'}}>loading...</h2> : <Robot userList={userList} />
        }
      </div>
    </ThemeContext.Provider>
  )
}

export default App
