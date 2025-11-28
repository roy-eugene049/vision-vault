// Shared timing for synchronized border beam animations
const BASE_DURATION = 8 // Base duration in seconds for all beams
let randomOffsets: Map<string, number> = new Map()

/**
 * Get a random but consistent initial offset for a border beam
 * This ensures all beams move in unison but start at different positions
 */
export function getBorderBeamOffset(id: string): number {
  if (!randomOffsets.has(id)) {
    // Generate random offset between 0 and 100
    randomOffsets.set(id, Math.random() * 100)
  }
  return randomOffsets.get(id)!
}

/**
 * Get synchronized duration for border beams
 */
export function getBorderBeamDuration(): number {
  return BASE_DURATION
}

