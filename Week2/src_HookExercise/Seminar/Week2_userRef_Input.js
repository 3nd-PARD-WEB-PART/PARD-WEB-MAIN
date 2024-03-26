import { useEffect, useRef } from "react";

function Week2_userRef_Input() {
    const inputValue = useRef();

    useEffect(() => {
        console.log(inputValue);
        inputValue.current.focus();
    }, []);

    return (
        <div>
            <input type="text" ref={inputValue} placeholder="username" />
            <button>입력</button>
        </div>
    )
}

export default Week2_userRef_Input;