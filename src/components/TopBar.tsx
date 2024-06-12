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
    <div className={`${icon ? "topbar-icon" : "topbar-text"} group`}>
      {icon ? icon : text}
      <span className="topbar-tooltip group-hover:scale-100">{tooltip}</span>
    </div>
  );
}

function TopBar() {
  return (
    <div className="fixed  top-8 left-0 h-16 w-screen m-0 bg-darkgrey17b text-white17b shadow-lg">
      <div className="flex flex-1 flex-row">
        <TopBarBadge icon={<FaFire size="28" />} />
        <TopBarBadge icon={<BsPlus size="32" />} />
        <TopBarBadge icon={<BsFillLightningFill size="20" />} />
        <TopBarBadge icon={<FaPoo size="20" />} />
        <TopBarBadge text="About" tooltip="ja dit is menu_subject_1" />
      </div>
    </div>
  );
}

export default TopBar;
