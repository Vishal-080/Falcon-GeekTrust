import { useState } from "react";
import FindFalcon from "./components/FindFalcon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <FindFalcon/>
      </div>
    </>
  );
}

export default App;
