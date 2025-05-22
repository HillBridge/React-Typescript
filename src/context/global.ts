import React from 'react'

export interface GlobalContextType {
    username: string
}

export const globalDefaultValue: GlobalContextType = {
    username: 'bridge'
}
export const GlobalContext = React.createContext<GlobalContextType>(globalDefaultValue)


