import "./index.css";
import Logo from "./components/Logo";
import ButtonLight from "./components/ButtonLight";
import ButtonDark from "./components/ButtonDark";
// import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import SocialsTopBar from "./components/SocialsTopBar";

function App() {
  return (
    <div className="flex bg-lightgrey17b">
      {/* <SideBar /> */}
      <SocialsTopBar />
      <TopBar />
      <div className="flex mt-16  items-center justify-evenly">
        <Logo width="20%" />
        <div className="">
          <ButtonLight />
          <ButtonDark />
          <p className="font-bold">Dutch raiding made simple </p>
          <p className="text-darkgrey17b">Copyright by some oelewappers </p>
        </div>
      </div>
    </div>
  );
}

export default App;
