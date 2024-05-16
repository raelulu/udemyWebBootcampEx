function handleClick() {
  console.log("CLICKED THE BUTTON!!");
}
function handleOver() {
  console.log("HOVERED!!");
}
export default function Clicker() {
  return (
    <div>
      <p onMouseOver={handleOver}>Hover Over Me</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
