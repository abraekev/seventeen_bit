import ButtonFold from "./ButtonFold";

interface SideMenuProps {
  open: boolean;
  onSideMenuClick: () => void;
}

function SideMenu(props: SideMenuProps) {
  const tailwindClasses: string = props.open
    ? "flex flex-col items-center fixed bg-darkgrey17b p-2 h-full w-32 top-0 left-0 shadow-2xl"
    : "hidden";

  return (
    <div className={tailwindClasses}>
      <ButtonFold left={true} onSideMenuClick={props.onSideMenuClick} />
    </div>
  );
}

export default SideMenu;
