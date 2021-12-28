import { useRef } from "react";
import { useClickAway } from "react-use";
import { crossIcon } from "src/svgIcons";
import Portal from "./HOC/Portal";

interface PopupProps {
  open: boolean;
  close: Function;
  children: JSX.Element;
  callerRef: React.MutableRefObject<Element | null>;
}

const overlayStyle = {
  background: "rgba(9, 67, 103, 0.6)",
  backdropFilter: "blur(1px)",
};

function Popup({ open, close, children, callerRef }: PopupProps) {
  const contentRef = useRef(null);
  // useClickAway(contentRef, () => close());

  if (!open) return <></>;

  return (
    <>
      <Portal>
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 z-[101]"
            style={overlayStyle}
            onClick={() => close()}
          ></div>
        </>
      </Portal>
      <div
        className="absolute mt-2 bg-white w-screen lg:w-[603px] px-7 py-10 shadow z-[1000]"
        ref={contentRef}
      >
        <div className="font-openSansRegular">{children}</div>
      </div>
    </>
  );
}

export default Popup;
