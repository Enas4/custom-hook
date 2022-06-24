import { useEffect } from "react";

function useCustomHook(count) {
  //our custom hook

  useEffect(() => {
    if (count >= 1) {
      document.title = `you clicked ${count}`;
    } else {
      document.title = `You clicked`;
    }
  }, [count]);
}

export default useCustomHook;
