type SetterFunction<T> = (prevState: T) => Partial<T>;

export function createStore<T>(initialState: T) {
  let state = initialState;

  const listeners = new Set<() => void>();

  function notifyListeners() {
    listeners.forEach((listener) => listener());
  }

  function setState(partialState: Partial<T> | SetterFunction<T>) {
    const newValue =
      typeof partialState === "function" ? partialState(state) : partialState;

    state = {
      ...state,
      ...newValue,
    };

    notifyListeners();
  }

  function subscribe(listener: () => void) {
    listeners.add(listener);

    return function unsubscribe() {
      listeners.delete(listener);
    };
  }

  function getState() {
    //get in real time the state
    return state;
  }

  return { setState, getState, subscribe };
}
