import React, { useContext, useState } from 'react'


export const AppContext = React.createContext({
    theme: undefined,
    setTheme: async (theme) => null,
    handleLinksClick: async (text, e) => null
})


export const useAppContext = () => useContext(AppContext)


export const AppContextProvider = ({ children, handleLinksClick }) => {
    return <AppContext.Provider value={{ handleLinksClick }}>{children}</AppContext.Provider>
}