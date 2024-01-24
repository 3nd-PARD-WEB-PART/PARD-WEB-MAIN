import React, {useState} from "react";

function Week2_4() {
    // input에 입력한 데이터가 저장될 변수 및 핸들러 선언
    const [inputData, setInputData] = useState("");

    // input의 값이 변경될 때마다 실행될 핸들러
    const changeData = (e) => {
        setInputData(e.target.value);
        // console.log(inputData);
    }

    // 확인 버튼이 클릭되었을 때 입력된 데이터를 alert로 보여주는 핸들러
    const alertData = () => {
        alert("입력된 데이터 : " + inputData);
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                placeholder="아무거나 입력해보세요."
                value={inputData}
                onChange={changeData}/>
            <button onClick={() => {
                    alertData()
                }}>확인</button>
        </div>
    );
}

export default Week2_4;
