import styled from "styled-components";

// 메인 컴포넌트
export default function Component() {
    return (
        <Div>
            <Title />
            <Content/>
        </Div>
    )
}

// 서브 컴포넌트 (타이틀)
function Title() {
    return (
        <div>
            <h1>타이틀</h1>
        </div>
    );
}
// 서브 컴포넌트 (컨텐츠)
function Content() {
    return (
        <div>
            <p>콘텐츠</p>
        </div>
    );
}

// Styled Components를 적용한 경우
const Div = styled.div`

`;