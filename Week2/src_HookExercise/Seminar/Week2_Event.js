import { useState } from "react";

function Week2_Event() {
  const [isToggleOn, setIsToggleOn] = useState(true);
  // 방법 1. 함수 안에 함수로 정의
  function handleClick() {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  return (
    <>
      <button onClick={handleClick}>{isToggleOn ? "켜짐" : "꺼짐"}</button>
    </>
  );
}

export default Week2_Event;
