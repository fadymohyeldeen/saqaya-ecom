/**
 * Retrieves and parses a JSON value from localStorage.
 * @param {string} key
 * @returns {any}
 */
export function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

/**
 * Converts a value to JSON and saves it to localStorage.
 * @param {string} key
 * @param {any} value
 */
export function setToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

/**
 * Removes an item from localStorage.
 * @param {string} key
 */
export function removeFromLocalStorage(key) {
  localStorage.removeItem(key)
}
