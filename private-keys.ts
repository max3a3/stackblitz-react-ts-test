export function getKey(key) {
  let keys = JSON.parse(localStorage.getItem('private-keys') || '{}');
  return keys[key];
}
