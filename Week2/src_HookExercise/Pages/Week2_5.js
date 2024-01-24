import React, { useState } from "react";

function Week2_5() {

    // input에 입력된 데이터를 저장하는 변수 및 핸들러 선언
    const [inputData, setInputData] = useState("");

    // input의 값이 변경되면 실행되는 핸들러
    const changeData = (e) => {
        setInputData(e.target.value);
    }

    // 입력된 값을 alert로 보여주는 핸들러
    const alertData = ()=> {
        alert(inputData);
    }
    return (
        <div>
            <input type="text" value={inputData} onChange={changeData}/>
            <button onClick={() => { alertData() }}>Display Alert</button>
        </div>
    );
}

export default Week2_5;