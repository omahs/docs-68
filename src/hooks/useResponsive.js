import { useEffect, useState } from "react";

const useResponsive = () => {
  const [width, setWidth] = useState(1920);
  const [loadedWidth, setLoadedWidth] = useState(false)
  const isTabletWidth = width <= 1024;
  const isMobileWidth = width <= 767;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    setLoadedWidth(true)

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobileWidth,
    isTabletWidth,
    loadedWidth,
  };
};

export default useResponsive;
