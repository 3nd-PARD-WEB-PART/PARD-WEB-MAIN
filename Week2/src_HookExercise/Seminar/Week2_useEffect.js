import { useState, useEffect } from "react";

function Week2_useEffect() {
  const [count, setCount] = useState(0);

  // 컴포넌트가 렌더링된 이후에 실행되는 부수 효과
  useEffect(() => {
    console.log("버튼을 눌렀습니다."); // 웹콘솔에 출력
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
}
export default Week2_useEffect;
