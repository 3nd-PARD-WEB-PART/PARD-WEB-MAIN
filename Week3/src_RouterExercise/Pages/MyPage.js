import { Navigate } from "react-router-dom";

function MyPage({ isLoggedIn, setIsLoggedIn }) {
    const handleClick = () => {

        setIsLoggedIn(false);
    }
    if (!isLoggedIn) {
        return <Navigate to="/login" replace="true" />;
    }
    
    return (
        <div>
            <h1>마이 페이지</h1>
            <button onClick={handleClick}>로그아웃</button>
        </div>
    );
}

export default MyPage;