import React from 'react'

export interface GlobalContextType {
    username: string,
    shoppingCart: { item: { id: number, name: string }[] },
    setShoppingCart: (item: { id: number, name: string }) => void
}

export const globalDefaultValue:GlobalContextType = {
    username: 'bridge',
    shoppingCart: {
        item: []
    },
    setShoppingCart: () => {}
}
export const GlobalContext = React.createContext<GlobalContextType>(globalDefaultValue)


