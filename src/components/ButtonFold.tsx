import React from "react";
import { RiArrowLeftSLine, RiMenuFill } from "react-icons/ri";

interface ButtonFoldProps {
  left: boolean;
  onSideMenuClick: () => void;
}
function ButtonFold(props: ButtonFoldProps) {
  const comp: React.ReactNode = props.left ? (
    <RiArrowLeftSLine size="28" onClick={() => props.onSideMenuClick()} />
  ) : (
    <RiMenuFill
      size="28"
      className="px-1"
      onClick={() => props.onSideMenuClick()}
    />
  );

  return (
    <div className="flex items-center bg-lightgrey17b rounded-full p-1">
      {comp}
      <img src="./discordLogo.webp" className="w-12 rounded-full" />
    </div>
  );
}

export default ButtonFold;
