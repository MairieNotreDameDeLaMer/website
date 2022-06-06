import { useContext, createContext, useState } from 'react'
import { Route } from '../components/Routes'

const defaultContextValue = {
  subRoutes: [],
  setSubRoutes: (routes: Route[]) => {},
}

export const subRoutesContext = createContext(defaultContextValue)

export const SubRoutesProvider = ({ children }) => {
  const [subRoutes, setSubRoutes] = useState<Route[]>([])
  return (
    <subRoutesContext.Provider value={{ subRoutes, setSubRoutes }}>
      {children}
    </subRoutesContext.Provider>
  )
}

export const useSubRoutes = () => useContext(subRoutesContext)
