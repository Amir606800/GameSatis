import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollBehaviour = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(5, 0);
  }, [pathname]);
  return null;
};

export default ScrollBehaviour;
