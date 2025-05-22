import React, { useMemo, useState } from 'react'
import { GlobalContext, globalDefaultValue } from './context/global'
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
  return (
    <ThemeContext.Provider value={themeProviderValue}>
      <GlobalContext.Provider value={globalDefaultValue}>{props.children}</GlobalContext.Provider>
    </ThemeContext.Provider>
  )
}

export default AppStateProvider
