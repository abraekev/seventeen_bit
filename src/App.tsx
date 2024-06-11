import "./index.css";
import Logo from "./components/Logo";
import ButtonLight from "./components/ButtonLight";
import ButtonDark from "./components/ButtonDark";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex bg-lightgrey17b">
      <SideBar />
      <div className="flex ml-10   items-center justify-evenly">
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
