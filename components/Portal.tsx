import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, id = null }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        return () => setMounted(false);
    }, []);

    return mounted
        ? createPortal(
              children,
              id ? document.getElementById(id) : document.body
          )
        : null;
};

export default Portal;
