import { useState } from "react";

function Week2_useState() {
  // current 변수에 2가 저장됨
  // setCurrent 함수 : current의 값 변경 가능
  const [current, setCurrent] = useState(2);

  const update = () => {
    // setCurrent(3); // current의 값을 3으로 변경
    setCurrent((prev) => prev + 1); //현재의 current 값이 prev에 저장되어 있음.
  };

  return (
    <div>
      <div>현재 파드 기수는?</div>
      <div>{current}기</div>
      {/* onClick : 버튼을 클릭했을 때 update 함수가 실행 */}
      <button onClick={update}>업데이트</button>
    </div>
  );
}

export default Week2_useState;
