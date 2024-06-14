import "./index.css";
import TopBar from "./components/TopBar";
import SocialsTopBar from "./components/SocialsTopBar";
import Content from "./components/Content";
import Copyright from "./components/Copyright";
import { useState } from "react";
import SideMenu from "./components/SideMenu";

function App() {
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);

  return (
    <div className="bg-blue17b min-h-screen flex flex-col items-center">
      <SocialsTopBar />
      <TopBar onSideMenuClick={() => setSideMenuIsOpen(!sideMenuIsOpen)} />
      <SideMenu
        open={sideMenuIsOpen}
        onSideMenuClick={() => setSideMenuIsOpen(!sideMenuIsOpen)}
      />

      <Content />
      <Copyright />
    </div>
  );
}

export default App;
