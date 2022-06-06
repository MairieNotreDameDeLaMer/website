import { useContext, createContext, useState } from 'react'

const defaultContextValue = {
  pageTitle: '',
  setPageTitle: (title: string) => {},
}

export const pageTitleContext = createContext(defaultContextValue)

export const PageTitleProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState<string>('')
  return (
    <pageTitleContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </pageTitleContext.Provider>
  )
}

export const usePageTitle = () => useContext(pageTitleContext)
