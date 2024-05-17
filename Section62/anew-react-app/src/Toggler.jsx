import { useState } from "react";
import "./Toggler.css";

export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  return (
    <div className="Toggler" onClick={toggleIsHappy}>
      {isHappy ? "😁" : "😭"}
    </div>
  );
}
