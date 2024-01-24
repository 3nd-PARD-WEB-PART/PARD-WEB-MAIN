import React, {useEffect, useState} from "react";
function Week2_2() {

    const [clickedCount, setClickedCount] = useState(0);

    const clickButton = () => {
        setClickedCount(clickedCount + 1);

    }

    useEffect(() => {
        console.log("리액트는 재밌어!!");
    }, [clickedCount]);

    return (
        <div>
            <p>You clicked {clickedCount} times</p>
            <button onClick={clickButton}>Click me</button>
        </div>
    );
}

export default Week2_2;
