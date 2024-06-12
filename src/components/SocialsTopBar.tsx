//import { BsFillLightningFill, BsPlus } from "react-icons/bs";
import { FaDiscord, FaYoutube } from "react-icons/fa";

interface TopBarIconProps {
  icon?: React.ReactElement;
  text?: string;
  tooltip?: string;
  link?: string;
}
function TopBarIcon({
  icon,
  text = "defaultText",
  link = "#",
}: TopBarIconProps) {
  return (
    <a href={link} className="topbar-icon-small group">
      {icon ? icon : text}
      {/* header
      <span className="topbar-tooltip group-hover:scale-100">{tooltip}</span> */}
    </a>
  );
}

function SocialsTopBar() {
  return (
    <div className="fixed  top-0 left-0 h-8 w-screen m-0 bg-blue17b text-white17b shadow-lg flex items-center justify-end pr-4 ">
      <div className="flex items-center space-x-2">
        <span>Check out our Discord! →</span>
        <TopBarIcon
          icon={<FaDiscord size="16" />}
          link="https://discord.gg/q374vA6Ek4"
        />
        <TopBarIcon
          icon={<FaYoutube size="16" />}
          link="https://youtube.com/playlist?list=PLx5X60wri2oaVrVsFNttC6JPh21JVIH1m&si=6HVA_RYIjZI9vXVE"
        />
      </div>
    </div>
  );
}

export default SocialsTopBar;
