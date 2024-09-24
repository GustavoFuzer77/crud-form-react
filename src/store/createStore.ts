import { useSyncExternalStore } from "react";

type SetterFunction<TState> = (prevState: TState) => Partial<TState>;

export function createStore<TState>(
  createState: (
    setState: (partialState: Partial<TState> | SetterFunction<TState>) => void,
    getState: () => TState
  ) => TState
) {
  let state = createState(setState, getState);
  const listeners = new Set<() => void>();

  function notifyListeners() {
    listeners.forEach((listener) => listener());
  }

  function setState(partialState: Partial<TState> | SetterFunction<TState>) {
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

  function useStore<TValue>(
    selector: (currentState: TState) => TValue
  ): TValue {
    return useSyncExternalStore(subscribe, () => selector(state));
  }

  return { setState, getState, subscribe, useStore };
}
