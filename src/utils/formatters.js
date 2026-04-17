// Converts a kebab-case to capitalized case.
export function formatName(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
