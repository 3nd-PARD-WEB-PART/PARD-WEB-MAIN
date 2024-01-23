// "react-router-dom" 라이브러리에서 "useParams" Hook을 import
import { useParams } from "react-router-dom"

const data = {
    Pmj: {
        name: "박민지",
        description: "파드 3기 웹 파트장"
    },
    Kki: {
        name: "김광일",
        description: "파드 3기 웹 부파트장"
    }
}

function Profile() {
    // 프로필 정보를 표시하는 컴포넌트  "useParams" Hook을 이용하여 URL에서 전달된 username 파라미터를 get
    const params = useParams();
    // username 파라미터에 해당하는 사용자 정보를 "data" 객체에서 get
    const profile = data[params.username];
    // 사용자 정보가 존재하면 해당 정보를 화면에 표시, 없으면 존재하지 않는 프로필임을 알리는 메세지 표시
    return (
        <div>
            <h1>사용자 프로필</h1>
            {
                profile
                    ? (
                        <div>
                            <h2>{profile.name}</h2>
                            <p>{profile.description}</p>
                        </div>
                    )
                    : (<p>존재하지 않는 프로필입니다.</p>)
            }
            
        </div>
    );
}
// Profile 컴포넌트를 모듈의 기본 내보내기(export default)로 export
export default Profile;