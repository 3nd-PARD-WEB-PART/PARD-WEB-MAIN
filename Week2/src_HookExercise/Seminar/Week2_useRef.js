import { useState, useRef } from "react";

function Week2_useRef() {
  const [state, setState] = useState(0); // state값 0으로 초기화
  const ref = useRef(0); // ref.current 값 0으로 초기화

  const increaseState = () => {
    setState(state + 1);
  };

  const increaseRef = () => {
    ref.current = ref.current + 1; //ref.current 값 증가
    console.log("ref", ref.current); // 증가된 값 콘솔에 출력
  };

  return (
    <div>
      <p>state: {state}</p>
      <p>ref: {ref.current}</p>
      {/* State 값 증가 버튼 */}
      <button onClick={increaseState}>State up!</button>
      {/* ref 값 증가 버튼, 하지만 렌더링 되지 않기 때문에 증가된 값이 보이지 않음 */}
      <button onClick={increaseRef}>Ref up!</button>
    </div>
  );
}

export default Week2_useRef;
