import React, {useRef} from "react";

function Week2_3() {
    const fileInput = useRef(null);
    const onCancle = () => {
        fileInput.current.value = "";
    }
    return (
        <div>
            <input type="file"
                // type : 입력 받기 위한 타입 설정
                accept="image/*"
                // accept : 특정 조건의 파일만 받을 수 있게끔 하는 속성 (ex 이미지 파일만 업로드 가능)
                ref={fileInput}
                // ref : 특정 변수와 연결
            />
            <button onClick={onCancle}>Cancle</button>
        </div>
    );
}

export default Week2_3;