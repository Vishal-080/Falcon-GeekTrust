import { useState } from "react";
import FindFalcon from "./components/FindFalcon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <FindFalcon/>
      </div>
    </>
  );
}

export default App;
