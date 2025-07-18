import { useEffect, useState } from "react";

const useInfiniteEffectBug = () => {
  const [count] = useState(0);

  useEffect(() => {
    // ❗ Infinite loop because count is being updated and also a dependency
    // setCount triggers a rerender, causing useEffect to run again
    // setCount(count + 1);
  }, [count]);

  return count;
};

export default useInfiniteEffectBug;