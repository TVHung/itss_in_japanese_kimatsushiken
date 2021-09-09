import { useState } from "react";

function Shiken(props) {
    const [list, setList] = useState(props);
    const [index, setIndex] = useState();

    const search = (string) => {
        let i = list.indexOf(string);
        setIndex(i !== -1 ? i + 1 : null);
    };

    return [index, search];
}

export default Shiken;
