import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { RoleId, roles, defaultRole } from '../data/roles'

interface RoleContextType {
  currentRole: RoleId
  setCurrentRole: (role: RoleId) => void
  theme: typeof roles[RoleId]
}

const RoleContext = createContext<RoleContextType | undefined>(undefined)

export function RoleProvider({ children }: { children: ReactNode }) {
  const [currentRole, setCurrentRole] = useState<RoleId>(defaultRole)

  useEffect(() => {
    // Update CSS variables for theme
    const theme = roles[currentRole]
    document.documentElement.style.setProperty('--role-primary', theme.primaryColor)
    document.documentElement.style.setProperty('--role-secondary', theme.secondaryColor)
    document.documentElement.style.setProperty('--role-accent', theme.accentColor)
  }, [currentRole])

  return (
    <RoleContext.Provider
      value={{
        currentRole,
        setCurrentRole,
        theme: roles[currentRole],
      }}
    >
      {children}
    </RoleContext.Provider>
  )
}

export function useRole() {
  const context = useContext(RoleContext)
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider')
  }
  return context
}


