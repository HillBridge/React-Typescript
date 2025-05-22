import React, { useMemo, useState } from 'react'
import { GlobalContext, globalDefaultValue, type GlobalContextType } from './context/global'
import { ThemeContext, type ThemeContextType } from './context/theme'


const AppStateProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [theme, setTheme] = useState('light')

  const themeProviderValue: ThemeContextType = useMemo(() => {
    return {
      theme: theme,
      toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }
    }
  }, [theme])

  const [state, setState] = useState<GlobalContextType>(globalDefaultValue)

  const stateProviderValue: GlobalContextType = useMemo(() => {
    return {
      ...state,
      setShoppingCart: (item: { id: number, name: string }) => {
        setState({ ...state, shoppingCart: { ...state.shoppingCart, item: [...state.shoppingCart.item, item] } })
      }
    }
  }, [state])
   
  return (
    <ThemeContext.Provider value={themeProviderValue}>
      <GlobalContext.Provider value={stateProviderValue}>{props.children}</GlobalContext.Provider>
    </ThemeContext.Provider>
  )
}

export default AppStateProvider
