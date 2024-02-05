import {useEffect, useState} from 'react';
import './App.css';
import {getUserData} from './AxiosAPI';
import styled, {keyframes} from 'styled-components';

function App() {
    // userData 상태 및 해당 상태를 업데이트하는 setUserData 함수 선언
    const [userData, setUserData] = useState([]);

    // useEffect를 사용하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정
    useEffect(() => {
        // fetchData 함수 정의 - 비동기로 데이터를 가져와서 상태를 업데이트하는 역할 수행
        const fetchData = async () => {
            try {
                // getUserData 함수를 호출하여 데이터를 가져오기
                const response = await getUserData();

                // 가져온 데이터를 콘솔에 출력 console.log("get data result", response.data.users); 가져온 데이터
                // 중 실제 데이터를 userData 상태로 업데이트
                setUserData(response.data.users); // 가령 response가 { data: [...] } 형태일 경우
            } catch (error) {
                // 에러가 발생한 경우 콘솔에 에러 메시지 출력
                console.error("Error fetching data:", error);
            }
        };

        // fetchData 함수 실행 - 컴포넌트가 마운트될 때 한 번만 실행되도록 설정된 useEffect에서 호출
        fetchData();
    }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행되도록 함

  return (
      <div>
        <h1 align = "center">User Data 가져오기</h1>
        <PageContainer>
              {
                  userData && userData.map((data, index) => (
                      <div key={index}>
                          <UserCard data={data}/>

                      </div>
                  ))
              }
        </PageContainer>
      </div>
    );
}

const PageContainer = styled.div `
  width: 100%;
  height : 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`
const UserCard = (e) => {
    return (
        <UserCardWrapper>
            <h3>ID : {e.data.id}</h3>
            <h3>이름 : {e.data.name}</h3>
            <h3>나이 : {e.data.age}</h3>
            <h3>파트 : {e.data.part}</h3>
            <img width = "200px" src={e.data.image}></img>
        </UserCardWrapper>
    )
}

const fadeInUp = keyframes `
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const UserCardWrapper = styled.div `
  width :300px;
  height : 300px;
  border-radius: 15px;
  margin : 20px;
  padding : 20px;
  background-color: #D3D3D3;
  color : black;
  transition: background-color 0.3s, color 0.3s; /* transition 속성 추가 */
  

  &:hover{
    background-color: #A9A9A9;
    color : white;
    animation: ${fadeInUp} 0.5s ease-in-out; /* fadeInUp 애니메이션 적용 */
  }
`;
export default App;
