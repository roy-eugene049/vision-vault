import { createContext, useContext, useState, ReactNode, useEffect, useMemo, useCallback } from 'react'
import { RoleId, roles, defaultRole } from '../data/roles'

interface RoleContextType {
  currentRole: RoleId
  setCurrentRole: (role: RoleId) => void
  theme: typeof roles[RoleId]
}

const RoleContext = createContext<RoleContextType | undefined>(undefined)

export function RoleProvider({ children }: { children: ReactNode }) {
  const [currentRole, setCurrentRole] = useState<RoleId>(defaultRole)

  // Memoize theme to prevent unnecessary re-renders
  const theme = useMemo(() => roles[currentRole], [currentRole])

  // Memoize setCurrentRole with useCallback
  const handleSetCurrentRole = useCallback((role: RoleId) => {
    setCurrentRole(role)
  }, [])

  useEffect(() => {
    // Update CSS variables for theme
    document.documentElement.style.setProperty('--role-primary', theme.primaryColor)
    document.documentElement.style.setProperty('--role-secondary', theme.secondaryColor)
    document.documentElement.style.setProperty('--role-accent', theme.accentColor)
  }, [theme])

  // Preload all role data on mount and verify
  useEffect(() => {
    // Dynamically import and call preload function
    import('../utils/preloadData').then(({ preloadAllRoleData }) => {
      preloadAllRoleData()
    })
    
    // Verify all role data on mount
    import('../utils/verifyRoleData').then(({ logRoleVerification }) => {
      logRoleVerification()
    })
  }, [])

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      currentRole,
      setCurrentRole: handleSetCurrentRole,
      theme,
    }),
    [currentRole, handleSetCurrentRole, theme]
  )

  return (
    <RoleContext.Provider value={contextValue}>
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


