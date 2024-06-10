import "./index.css";
import { useState } from "react";
import Logo from "./components/Logo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-lightgrey17b space-y-4 font-sans ">
      <Logo width="30%" />
      <p className="bg-orange17b text-white17b font-bold py-2 px-4 rounded-full cursor-pointer hover:bg-red17b inline-block">
        Seventeen Bit
      </p>

      <button
        className="bg-darkgrey17b text-white17b font-bold py-2 px-4 rounded-full cursor-pointer hover:bg-yellow17b inline-block"
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        clicks are {count}
      </button>
      <p className="font-bold">Dutch raiding made simple </p>

      <p className="text-darkgrey17b">Copyright by some oelewappers </p>
    </div>
  );
}

export default App;
