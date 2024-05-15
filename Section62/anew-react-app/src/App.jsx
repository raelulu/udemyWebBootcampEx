import "./App.css";
import ColorList from "./ColorList";
import Die from "./Die";
import DoubleDice from "./DoubleDice";
import Greeter from "./Greeter";
import Heading from "./Heading";
import ListPicker from "./ListPicker";

function App() {
  return (
    <>
      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <ColorList colors={["olive", "orangered", "slategray"]} />

      <Heading color="magenta" text="welcome!" fontSize="20px" />
      <Heading color="teal" text="blah" fontSize="48px" />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      {/* <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} />
      <Greeter person="Ted" /> */}
      {/* <Die numSides={sides} />
      <Die />
      <Die numSides={10} /> */}
    </>
  );
}

export default App;
