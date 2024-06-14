import ButtonFold from "./ButtonFold";
import ButtonLight from "./ButtonLight";

interface SideMenuProps {
  open: boolean;
  onSideMenuClick: () => void;
}

function SideMenu(props: SideMenuProps) {
  const tailwindClasses: string = props.open
    ? "flex flex-col items-start fixed bg-darkgrey17b px-6 py-4 h-full w-1/2 top-0 left-0 shadow-2xl"
    : "hidden";

  return (
    <div className={tailwindClasses}>
      <div className="flex self-center">
        <ButtonFold left={true} onSideMenuClick={props.onSideMenuClick} />
      </div>
      <ul className="flex flex-col gap-4 mt-10 w-full">
        <li className="">
          <ButtonLight
            text="Armory"
            link="https://worldofwarcraft.blizzard.com/en-gb/guild/eu/ragnaros/seventeen-bit"
          />
        </li>
        <li className="">
          <ButtonLight
            text="Logs"
            link="https://www.warcraftlogs.com/guild/rankings/376322/latest#difficulty=4"
          />
        </li>
        <li className="">
          <ButtonLight text="NYI" />
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
