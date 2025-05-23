import React, { createContext, useState } from 'react'

interface GlobalContextType {
  username: string
  setShoppingCart: (item: { id: number, name: string }) => void
}

export const GlobalContext = createContext<GlobalContextType>({
  username: '',
  setShoppingCart: () => {}
})

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [username] = useState('游客')
  const [shoppingCart, setShoppingCart] = useState<{ id: number, name: string }[]>([])

  const handleSetShoppingCart = (item: { id: number, name: string }) => {
    setShoppingCart([...shoppingCart, item])
  }

  return (
    <GlobalContext.Provider value={{ username, setShoppingCart: handleSetShoppingCart }}>
      {children}
    </GlobalContext.Provider>
  )
} 
