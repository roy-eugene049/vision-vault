/**
 * Verification utility to ensure all roles have complete data
 */
import { skillsByRole } from '../data/skills'
import { projects } from '../data/projects'
import { roles, RoleId } from '../data/roles'

export interface RoleVerification {
  roleId: RoleId
  roleName: string
  skillsCount: number
  featuredProjectsCount: number
  allProjectsCount: number
  skills: string[]
  featuredProjects: string[]
  status: 'complete' | 'incomplete'
  issues: string[]
}

export function verifyAllRoles(): RoleVerification[] {
  const results: RoleVerification[] = []

  Object.keys(roles).forEach((roleId) => {
    const role = roles[roleId as RoleId]
    const skills = skillsByRole[roleId as RoleId] || []
    const allRoleProjects = projects.filter((p) => p.role.includes(roleId as RoleId))
    const featuredRoleProjects = allRoleProjects.filter((p) => p.featured)

    const issues: string[] = []

    if (skills.length === 0) {
      issues.push('No skills defined')
    }
    if (featuredRoleProjects.length === 0) {
      issues.push('No featured projects')
    }
    if (allRoleProjects.length === 0) {
      issues.push('No projects at all')
    }

    results.push({
      roleId: roleId as RoleId,
      roleName: role.name,
      skillsCount: skills.length,
      featuredProjectsCount: featuredRoleProjects.length,
      allProjectsCount: allRoleProjects.length,
      skills: skills.map((s) => s.name),
      featuredProjects: featuredRoleProjects.map((p) => p.title),
      status: issues.length === 0 ? 'complete' : 'incomplete',
      issues,
    })
  })

  return results
}

export function logRoleVerification() {
  const results = verifyAllRoles()
  
  console.group('🔍 Role Data Verification')
  results.forEach((result) => {
    const icon = result.status === 'complete' ? '✅' : '❌'
    console.group(`${icon} ${result.roleName} (${result.roleId})`)
    console.log(`Skills: ${result.skillsCount}`)
    console.log(`Featured Projects: ${result.featuredProjectsCount}`)
    console.log(`All Projects: ${result.allProjectsCount}`)
    
    if (result.issues.length > 0) {
      console.warn('Issues:', result.issues)
    }
    
    if (result.skills.length > 0) {
      console.log('Skills:', result.skills.join(', '))
    }
    
    if (result.featuredProjects.length > 0) {
      console.log('Featured Projects:', result.featuredProjects.join(', '))
    }
    
    console.groupEnd()
  })
  console.groupEnd()
  
  return results
}

