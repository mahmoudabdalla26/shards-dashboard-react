class SimpleDispatcher {
  constructor() {
    this.callbacks = [];
  }

  register(callback) {
    this.callbacks.push(callback);
    return this.callbacks.length - 1;
  }

  dispatch(action) {
    this.callbacks.forEach(callback => {
      callback(action);
    });
  }
}

export default new SimpleDispatcher();
