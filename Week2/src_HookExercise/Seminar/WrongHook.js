import { useEffect, useState } from "react";

function WrongHook() {
	const [name, setName] = useState('PARD');
	
	if(name !== ''){ // 조건문 안 useEffect Hook 삽입 -> 잘못된 hook 선언
		useEffect(() => {
			...
		});
	}
  return <></>;
}

export default WrongHook;
