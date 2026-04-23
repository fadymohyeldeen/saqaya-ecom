/**
 * Converts a slug to a formatted display name.
 * @param {string} slug (e.g: "mobile-accessories")
 * @returns {string} (e.g: "Mobile Accessories")
 */
export function formatName(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
