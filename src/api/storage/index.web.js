export default {
  async getItem(...args) {
    return localStorage.getItem(...args);
  },
  async setItem(...args) {
    localStorage.setItem(...args);
  },
  async removeItem(key) {
    localStorage.removeItem(key);
  },
};
