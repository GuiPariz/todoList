import { useEffect, useState, Dispatch, SetStateAction } from "react";

type response<T> = [T, Dispatch<SetStateAction<T>>];

export default function usePersistedState<T>(
  key: string,
  initialState: T
): response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);
    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
