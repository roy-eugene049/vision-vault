import { motion } from 'framer-motion'
import { useRole } from '../../contexts/RoleContext'
import { roles, RoleId } from '../../data/roles'
import { fadeInUp, transition } from '../../utils/animations'

export function RoleSwitcher() {
  const { currentRole, setCurrentRole, theme } = useRole()

  const handleRoleChange = (roleId: RoleId) => {
    setCurrentRole(roleId)
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={transition}
      className="flex flex-wrap gap-4 md:gap-6 justify-center"
    >
      {(Object.keys(roles) as RoleId[]).map((roleId) => {
        const role = roles[roleId]
        const isActive = currentRole === roleId

        return (
          <motion.button
            key={roleId}
            onClick={() => handleRoleChange(roleId)}
            className={`
              px-8 py-4 rounded-full font-semibold text-base md:text-lg
              transition-all duration-500 relative overflow-hidden
              ${isActive
                ? 'text-black shadow-2xl'
                : 'text-white/70 hover:text-white glass-modern border border-white/20 hover:border-white/40'
              }
            `}
            style={{
              backgroundColor: isActive ? theme.primaryColor : 'transparent',
              borderColor: isActive ? theme.primaryColor : undefined,
              boxShadow: isActive ? `0 0 30px ${theme.primaryColor}50, 0 10px 40px rgba(0,0,0,0.3)` : undefined,
            }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">{role.name}</span>
            {isActive && (
              <motion.div
                layoutId="activeRole"
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={false}
                transition={transition}
              />
            )}
          </motion.button>
        )
      })}
    </motion.div>
  )
}


