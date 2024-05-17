import "./App.css";
import Clicker from "./Clicker";
import Slots from "./Slots";

function App() {
  return (
    <>
      <Clicker message="HI!!!" buttonText="Please Click Me" />
      <Clicker message="Please Stop Clicking Me!" buttonText="do not click" />
    </>
  );
}

export default App;
