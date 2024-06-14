//import { BsFillLightningFill, BsPlus } from "react-icons/bs";
import { FaDiscord, FaYoutube } from "react-icons/fa";

interface SocialsTopBarIconProps {
  icon?: React.ReactElement;
  text?: string;
  tooltip?: string;
  link?: string;
}
function SocialsTopBarIcon({
  icon,
  text = "defaultText",
  link = "#",
}: SocialsTopBarIconProps) {
  return (
    <a href={link} className="socialstopbar-icon group">
      {icon ? icon : text}
      {/* header
      <span className="topbar-tooltip group-hover:scale-100">{tooltip}</span> */}
    </a>
  );
}

function SocialsTopBar() {
  return (
    <div className="socialstopbar">
      <div className="flex h-full responsive-w items-center justify-end gap-2 px-2 h-">
        <span className="">Check our Discord! →</span>
        <SocialsTopBarIcon
          icon={<FaDiscord size="100" />}
          link="https://discord.gg/q374vA6Ek4"
        />
        <div className="hidden md:block">
          <SocialsTopBarIcon
            icon={<FaYoutube size="60" />}
            link="https://youtube.com/playlist?list=PLx5X60wri2oaVrVsFNttC6JPh21JVIH1m&si=6HVA_RYIjZI9vXVE"
          />
        </div>
      </div>
    </div>
  );
}

export default SocialsTopBar;
