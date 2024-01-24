import React, {useState} from "react";
function Week2_1() {

    const [clickedCount, setClickedCount] = useState(0);

    const clickButton = () => {
        setClickedCount(clickedCount + 1);

    }

    return (
        <div>
            <p>You clicked {clickedCount} times</p>
            <button onClick={clickButton}>Click me</button>
        </div>
    );
}

export default Week2_1;
