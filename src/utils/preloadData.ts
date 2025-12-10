/**
 * Preloads all role data to ensure fast switching between roles
 */
import { projects } from '../data/projects'
import { skillsByRole } from '../data/skills'
import { roles } from '../data/roles'
import { galleryItems } from '../data/gallery'

export function preloadAllRoleData() {
  // Preload all role themes
  Object.values(roles).forEach((role) => {
    // Force browser to cache theme data
    const themeData = {
      primaryColor: role.primaryColor,
      secondaryColor: role.secondaryColor,
      accentColor: role.accentColor,
    }
    // Store in sessionStorage for quick access
    sessionStorage.setItem(`role-theme-${role.id}`, JSON.stringify(themeData))
  })

  // Preload all skills data
  Object.keys(skillsByRole).forEach((roleId) => {
    const skills = skillsByRole[roleId as keyof typeof skillsByRole]
    sessionStorage.setItem(`role-skills-${roleId}`, JSON.stringify(skills))
  })

  // Preload all projects data
  sessionStorage.setItem('all-projects', JSON.stringify(projects))

  // Preload gallery data
  sessionStorage.setItem('gallery-items', JSON.stringify(galleryItems))
}

/**
 * Gets cached role data if available
 */
export function getCachedRoleData(roleId: string) {
  const cached = sessionStorage.getItem(`role-theme-${roleId}`)
  if (cached) {
    try {
      return JSON.parse(cached)
    } catch {
      return null
    }
  }
  return null
}

