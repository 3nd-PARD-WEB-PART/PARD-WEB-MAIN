import MediaQuery from "react-responsive";

function UseMediaQueryComponent() {
    return (
        <div>
            <MediaQuery minWidth={1224}>
                <p>You are a desktop or laptop</p>
            </MediaQuery>

            <MediaQuery maxWidth={1224}>
                <p>You are a tablet or mobile phone</p>
            </MediaQuery>
        </div>
    );
}

export default UseMediaQueryComponent;