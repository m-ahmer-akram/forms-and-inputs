import React from "react";
import { SimpleInput } from "./components/SimpleInput";
import { BasicForm } from "./components/BasicForm";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <SimpleInput />
      </div>
      <div className="app">
        <BasicForm />
      </div>
    </React.Fragment>
  );
}

export default App;
