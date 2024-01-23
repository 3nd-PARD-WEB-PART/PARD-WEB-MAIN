import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Articles from "./Pages/Articles";
import Article from "./Pages/Article";
import Layout from "./Layout";
import MyPage from "./Pages/MyPage";
import { useState } from "react";
import Login from "./Pages/Login";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/profiles/:username" element={<Profile />}/>
                <Route path="/articles" element={<Articles />}>
                    <Route path=":id" element={<Article />}/>
                </Route>
                <Route path = "/mypage" element={<MyPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
            </Route>
            <Route path = "/login" element = {<Login setIsLoggedIn = {setIsLoggedIn}/>}/>
        </Routes>
    );
}

export default App;
