import { useState } from "react";
import Logo from "./components/Logo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Logo width="50%" />

      <h1>Seventeen Bit</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          clicks are {count}
        </button>
        <p>Dutch raiding made simple </p>
      </div>
      <p className="read-the-docs">Copyright by some oelewappers </p>
    </>
  );
}

export default App;
