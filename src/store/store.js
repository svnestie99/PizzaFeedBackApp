export const store = {
  _state: {
    isFetching: false,
    guests: []
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.isFetching = buttonReducer(this._state.isFetching, action);

    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }
};

window.store = store;
