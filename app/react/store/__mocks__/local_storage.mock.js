const mock = {
  store: {},
  getItem(key) {
    return this.store[key];
  },
  setItem(key, value) {
    this.store[key] = value.toString();
  },
  clear() {
    this.store = {};
  }
};

Reflect.defineProperty(window, 'localStorage', { value: mock });
