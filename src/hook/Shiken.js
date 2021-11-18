import { useState } from "react";

function Shiken(props) {
  const [list, setList] = useState(props);
  const [index, setIndex] = useState();
  //push 2
  const search = (string) => {
    let i = list.indexOf(string);
    setIndex(i !== -1 ? i + 1 : "NaN");
  };

  return [index, search];
}

export default Shiken;
