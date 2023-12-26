import { useEffect, useState } from "react";

export const useIsIPhone = () => {
  const [isIPhone, setIsIPhone] = useState<boolean>(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setIsIPhone(true);
      return;
    }

    setIsIPhone(false);
  }, []);

  return isIPhone;
};
