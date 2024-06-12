import "./index.css";
import Logo from "./components/Logo";
import ButtonLight from "./components/ButtonLight";
import ButtonDark from "./components/ButtonDark";
// import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import SocialsTopBar from "./components/SocialsTopBar";
import Description from "./components/Description";
import YoutubeEmbedded from "./components/YoutubeEmbedded";

function App() {
  return (
    <div className="flex bg-lightgrey17b">
      <SocialsTopBar />
      <TopBar />
      <div className="flex mt-28">
        <div className="flex items-center justify-evenly">
          <Logo width="xl" />
          <Description />
          <div className="">
            <ButtonLight />
            <ButtonDark />
            <p className="font-bold">Dutch raiding made simple </p>
            <p className="text-darkgrey17b">Copyright by some oelewappers </p>
          </div>
        </div>
        <YoutubeEmbedded />
      </div>
    </div>
  );
}

export default App;
