import "./index.css";

import TopBar from "./components/TopBar";
import SocialsTopBar from "./components/SocialsTopBar";
import Content from "./components/Content";

function App() {
  return (
    <div className="bg-blue17b h-auto w-full">
      <SocialsTopBar />
      <TopBar />
      <Content />
    </div>
  );
}

export default App;
