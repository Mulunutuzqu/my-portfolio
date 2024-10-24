"use client";
interface EdgeOverlayProps {
  top: boolean;
}

function EdgeOverlay({ top }: EdgeOverlayProps) {
  return (
    <div
      className={`${top ? "edge" : "edge-inverse bottom-0"} fixed z-[48] flex h-[24px] w-full backdrop-blur`}
    ></div>
  );
}

export default EdgeOverlay;
