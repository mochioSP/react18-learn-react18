import { Suspense } from "react";
import "./App.css";

import { AutoBatchEventHandler } from "./components/AutoBatchEventHandler";
import { AutoBatchOther } from "./components/AutoBatchOther";
import { ReactQuery } from "./components/ReactQuery";
import { Transition } from "./components/Transition";

function App() {
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
      <hr />
      <Suspense fallback={<p>Now Loading...</p>}>
        <ReactQuery />
      </Suspense>
      <ReactQuery />
    </div>
  );
}

export default App;
