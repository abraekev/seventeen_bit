import { BsFillLightningFill } from "react-icons/bs";
import { FaPoo } from "react-icons/fa";
import ButtonFold from "./ButtonFold";

//#region SubComponents
interface TopBarIconProps {
  children: React.ReactNode;
  tooltip?: string;
}
function TopBarIcon({ children, tooltip = "tooltip" }: TopBarIconProps) {
  return (
    <div className="topbar-icon group">
      {children}
      <span className="topbar-tooltip group-hover:scale-100">{tooltip}</span>
    </div>
  );
}

interface TopBarTextProps {
  text: string;
  tooltip: string;
}
function TopBarText({
  text = "defaultText",
  tooltip = "tooltip",
}: TopBarTextProps) {
  return (
    <div className="topbar-text ml-auto group">
      {text}
      <span className="topbar-tooltip group-hover:scale-100">{tooltip}</span>
    </div>
  );
}
//#endregion

interface TopBarProps {
  onSideMenuClick: () => void;
}
function TopBar(props: TopBarProps) {
  return (
    <div className="topbar">
      {/* mobile bar */}
      <div
        className="flex md:hidden
          responsive-w h-full justify-start items-center
          gap-2 "
      >
        <ButtonFold left={false} onSideMenuClick={props.onSideMenuClick} />
        <TopBarText text="About" tooltip="Nothing to see here." />
      </div>
      {/* browser bar */}
      <div
        className="hidden md:flex
          responsive-w
          h-full justify-start items-center
          px-2 gap-2 "
      >
        <TopBarIcon tooltip="Roster">
          <a href="https://worldofwarcraft.blizzard.com/en-gb/guild/eu/ragnaros/seventeen-bit">
            <img src="./discordLogo.webp" className="w-20 rounded-full" />
          </a>
        </TopBarIcon>
        <TopBarIcon>
          <BsFillLightningFill size="30" />
        </TopBarIcon>
        <TopBarIcon>
          <FaPoo size="30" />
        </TopBarIcon>
        <TopBarText text="About" tooltip="What we do in the shadows." />
      </div>
    </div>
  );
}

export default TopBar;
