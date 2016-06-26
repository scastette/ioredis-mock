export function exists(...keys) {
  return keys.reduce((totalExists, key) => {
    if (this.data.hasOwnProperty(key)) {
      return totalExists + 1;
    }
    return totalExists;
  }, 0);
}