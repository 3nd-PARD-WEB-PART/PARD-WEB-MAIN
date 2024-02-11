import { useState } from "react";

function Week2_Event2() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  // 방법 2. arrow function을 사용하여 정의
  const handleClick = () => {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  };
  return (
    <>
      <button onClick={handleClick}>{isToggleOn ? "켜짐" : "꺼짐"}</button>
    </>
  );
}

export default Week2_Event2;
