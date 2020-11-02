import logo from "./logo.svg";
import "./App.css";
import Learning from "./pages/Learning.js";

function App() {
  const props = {
    vimKey: "l",
    type: "Movement",
  };
  return (
    <div className="App">
      <Learning props={props} />
    </div>
  );
}

export default App;
