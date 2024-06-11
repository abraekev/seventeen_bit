import { BsFillLightningFill, BsPlus } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

interface SideBarIconProps {
  icon: React.ReactElement;
  text?: string;
}
function SideBarIcon({ icon, text = "tooltip" }: SideBarIconProps) {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
}

function SideBar() {
  return (
    <div className="fixed  top-0 left-0 h-screen w-16 m-0 bg-darkgrey17b text-white17b shadow-lg">
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
    </div>
  );
}

export default SideBar;
