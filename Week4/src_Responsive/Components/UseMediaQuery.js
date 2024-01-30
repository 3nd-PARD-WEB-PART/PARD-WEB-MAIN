import { useMediaQuery } from "react-responsive";

function UseMediaQuery() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width : 1224px)'
    });
    const isTabletOrMobile = useMediaQuery({
        query: '(max-width : 1224px)'
    });

    return (
        <div>
            {isDesktopOrLaptop && (
                <p>You are a destop or laptop</p>
            )}
            {isTabletOrMobile && (
                <p>You are a tablet or mobile phone</p>
            )}
        </div>
    );
}

export default UseMediaQuery;


