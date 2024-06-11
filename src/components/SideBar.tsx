import { BsFillLightningFill, BsPlus } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

interface SideBarIconProps {
  icon: React.ReactElement;
}
function SideBarIcon({ icon }: SideBarIconProps) {
  return <div className="sidebar-icon">{icon}</div>;
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
