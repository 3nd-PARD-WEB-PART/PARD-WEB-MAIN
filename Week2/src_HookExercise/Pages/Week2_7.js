import React from "react";
import styled from "styled-components";

function Week2_7() {
    return (<div>
        <MyButton>내가 만드는 버튼</MyButton>
    </div>);
}

const MyButton = styled.button `
    padding : 20px;

    font-size: 30px;

    border : 5px solid orange;
    
    color : orange;

    background-color: black;

    // 해당 컴포넌트에 마우스를 올렸을 때 스타일을 다르게 지정해줄 수 있다.
    &:hover {
        border : 5px solid skyblue;
        color: skyblue;
    }
`;
export default Week2_7;
