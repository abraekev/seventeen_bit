import React from "react";

interface ButtonMenuProps {
  list: React.ReactNode[];
}
function ButtonMenu({ list }: ButtonMenuProps) {
  return (
    <div className="flex flex-col justify-evenly items-start gap-2">
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default ButtonMenu;
