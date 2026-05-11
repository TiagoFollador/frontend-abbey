/**
 * Generates a tiny 10x10 base64-encoded JPEG as a blurDataURL placeholder.
 * Used at build time — pass a dominant color to tint the blur.
 */
export function generateBlurPlaceholder(dominantColor = '#C9A96E'): string {
  // Convert hex to rgb
  const r = parseInt(dominantColor.slice(1, 3), 16)
  const g = parseInt(dominantColor.slice(3, 5), 16)
  const b = parseInt(dominantColor.slice(5, 7), 16)

  // Minimal 1x1 pixel SVG encoded as base64 — used as blurDataURL
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><rect width="1" height="1" fill="rgb(${r},${g},${b})"/></svg>`
  const base64 = Buffer.from(svg).toString('base64')
  return `data:image/svg+xml;base64,${base64}`
}

// Pre-generated placeholders for common abbey brand colors
export const BLUR_PLACEHOLDERS = {
  gold:   generateBlurPlaceholder('#C9A96E'),
  cream:  generateBlurPlaceholder('#FAF6EF'),
  brown:  generateBlurPlaceholder('#2C1810'),
  muted:  generateBlurPlaceholder('#F2EAD8'),
} as const
