import "./index.css";

import TopBar from "./components/TopBar";
import SocialsTopBar from "./components/SocialsTopBar";
import Content from "./components/Content";

function App() {
  return (
    <div className="flex bg-lightgrey17b">
      <SocialsTopBar />
      <TopBar />
      <Content />
    </div>
  );
}

export default App;
