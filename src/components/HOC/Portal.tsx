import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: JSX.Element;
}

const Portal = ({ children }: PortalProps) => {
  const [mounted, setMounted] = useState(false);

  const portalElement = document.querySelector("#portal");

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted && portalElement
    ? createPortal(children, portalElement)
    : null;
};

export default Portal;
