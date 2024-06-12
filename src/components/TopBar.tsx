import { BsFillLightningFill, BsPlus } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

interface TopBarBadgeProps {
  icon?: React.ReactElement;
  text?: string;
  tooltip?: string;
}
function TopBarBadge({
  icon,
  text = "defaultText",
  tooltip = "tooltip",
}: TopBarBadgeProps) {
  return (
    <div className={`${icon ? "topbar-icon" : "topbar-text"} group mx-4`}>
      {icon ? icon : text}
      <span className="topbar-tooltip group-hover:scale-100">{tooltip}</span>
    </div>
  );
}

function TopBar() {
  return (
    <div
      className="fixed 
      top-8 left-0 h-16 w-full
      bg-darkgrey17b shadow-lg items-center justify-center"
    >
      <div
        className=" flex mx-auto items-center justify-start
        w-1/2 "
      >
        <a href="/" className="topbar-icon mx-4">
          <img src="./17bitLogoSmall.png" alt="17bit logo" />
        </a>
        <TopBarBadge icon={<FaFire size="28" />} />
        <TopBarBadge icon={<BsPlus size="32" />} />
        <TopBarBadge icon={<BsFillLightningFill size="20" />} />
        <TopBarBadge icon={<FaPoo size="20" />} />
        <div className="flex items-center ml-auto">
          <TopBarBadge text="About" tooltip="What we do in the shadows." />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
