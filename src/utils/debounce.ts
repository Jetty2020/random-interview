export const debounce = <Event>(
  callback: (event: Event) => void,
  delay: number,
  defaultCallback?: (event: Event) => void,
) => {
  let timerId: ReturnType<typeof setTimeout>;
  return (event: Event) => {
    defaultCallback?.(event);
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(callback, delay, event);
  };
};
