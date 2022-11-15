import "./App.css";
import { Button } from "@ie/common";

import { store } from "@ie/api-call";
import { Provider } from "react-redux";
import { Counter } from "./Counter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Button textColor="red"> Hello, ClickMe </Button>
      </div>

      <Counter />
    </Provider>
  );
}

export default App;
