//import { BsFillLightningFill, BsPlus } from "react-icons/bs";
import { FaFire } from "react-icons/fa";

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

function SocialsTopBar() {
  return (
    <div className="fixed  top-0 left-0 h-8 w-screen m-0 bg-blue17b text-white17b shadow-lg flex items-center justify-end pr-4">
      <div className="flex items-center space-x-8">
        <span>Check out our Discord! →</span>
        <TopBarIcon icon={<FaFire size="28" />} />
      </div>
    </div>
  );
}

export default SocialsTopBar;
