declare function useLocalStorage<T>(key: string, initialValue: T): readonly [any, (value: T | ((val: T) => T)) => void];
export default useLocalStorage;
