import { useState, useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useScrollView = () => {
  const [y, setY] = useState<number | undefined>(undefined);

  const handleNavigation = useCallback(
    (event) => {
      const window = event.currentTarget;
      setY(window.scrollY);
    },
    [y],
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => window.removeEventListener("scroll", handleNavigation);
  }, [handleNavigation]);

  return y;
};
