import "./App.css";
import Clicker from "./Clicker";
import ColorList from "./ColorList";
import Counter from "./Counter";
import Die from "./Die";
import DoubleDice from "./DoubleDice";
import Form from "./Form";
import Greeter from "./Greeter";
import Heading from "./Heading";
import ListPicker from "./ListPicker";
import PropertyList from "./PropertyList";
import ShoppingList from "./ShoppingList";
import Toggler from "./Toggler";
import ToggleCounter from "./ToggleCounter";
import ColorBox from "./ColorBox";
import ColorBoxGrid from "./ColorBoxGrid";

function App() {
  const properties = [
    { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
    { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
    { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
    { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
    { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
    { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
  ];
  const colors = [
    "#E53935",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
  ];

  return (
    <>
      <ColorBoxGrid colors={colors} />
      {/* <ToggleCounter /> */}
      {/* <Counter /> */}
      {/* <Form />
      <Clicker /> */}
      {/* <PropertyList properties={properties} /> */}
      {/* <ShoppingList items={data} /> */}
      {/* <ColorList colors={["red", "pink", "purple", "teal"]} />
      <ColorList colors={["olive", "orangered", "slategray"]} />

      <Heading color="magenta" text="welcome!" fontSize="20px" />
      <Heading color="teal" text="blah" fontSize="48px" />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice /> */}

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
