import { BsFillLightningFill, BsPlus } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

interface TopBarIconProps {
  icon?: React.ReactElement;
  text?: string;
  tooltip?: string;
}
function TopBarIcon({
  icon,
  text = "defaultText",
  tooltip = "tooltip",
}: TopBarIconProps) {
  return (
    <div className="topbar-icon group">
      {icon ? icon : text}
      <span className="topbar-tooltip group-hover:scale-100">{tooltip}</span>
    </div>
  );
}

function TopBar() {
  return (
    <div className="fixed  top-8 left-0 h-16 w-screen m-0 bg-darkgrey17b text-white17b shadow-lg">
      <div className="flex flex-1 flex-row">
        <TopBarIcon icon={<FaFire size="28" />} />
        <TopBarIcon icon={<BsPlus size="32" />} />
        <TopBarIcon icon={<BsFillLightningFill size="20" />} />
        <TopBarIcon icon={<FaPoo size="20" />} />
        <TopBarIcon text="menu_subject_1" tooltip="ja dit is menu_subject_1" />
      </div>
    </div>
  );
}

export default TopBar;
