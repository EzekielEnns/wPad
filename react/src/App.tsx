import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

/*
so we want to try and use  react.memo with contenteditable
https://react.dev/reference/react/memo
https://chatgpt.com/share/e/67363c97-8308-8001-83d4-0945338ac60c
const NonUpdatingComponent = React.memo(() => {
  return (
    <div>
      <h1>This component does not re-render</h1>
      //fully reactive component
      <ReactiveSwitch />
    </div>
  );
});

react memo just lets use not rerender when the props dont change,
so we would have events like on change be done maybe using chakras callback ref
*/

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
