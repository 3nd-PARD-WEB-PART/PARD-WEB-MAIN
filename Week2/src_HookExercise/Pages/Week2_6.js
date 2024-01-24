import React, {useState} from "react";

function Week2_6() {

    // input에 입력된 데이터를 저장하는 변수 및 핸들러 선언
    const [inputData, setInputData] = useState("");

    // input의 값이 변경되면 실행되는 핸들러
    const changeData = (e) => {
        setInputData(e.target.value);
    }

    // 입력된 값을 document의 title로 수정해주는 핸들러
    const submitData = (e) => {
        e.preventDefault(); // form에서 submit 시 새로고침되는 것을 막아주는 구문
        document.title = inputData;
    }
    return (
        <div>
            <form onSubmit={submitData}>
                <input
                    type="text"
                    value={inputData}
                    onChange={changeData}
                    placeholder="Please enter title"/>
                <button type = "submit">Submit</button>
            </form>
        </div>
    );
}

export default Week2_6;