import {useRecoilState, useRecoilValue} from "recoil";
import {myInfoAge, myInfoName} from "../Atom";
import React from "react";
import {Link} from "react-router-dom";

function MyInfo() {
    const myData = {
        myName: useRecoilValue(myInfoName),
        myAge: useRecoilValue(myInfoAge)
    }

    return (
        <div>
            <h3>나이 : {myData.myAge}</h3>
            <h3>이름 : {myData.myName}</h3>

            {console.log("myData", myData)}

            <Link to="/update">수정하기</Link>
            <br/>
        </div>
    );
}

export default MyInfo;
