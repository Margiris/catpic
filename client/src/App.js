import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import TopMenu from "./components/TopMenu";
import PostList from "./components/PostList";
import PostWithComments from "./components/PostWithComments";
import UserList from "./components/UserList";

function App() {
    return (
        <div>
            <TopMenu />
            <BrowserRouter>
                <Route exact path="/" component={PostList} />
                <Route path="/post/:post_id" component={PostWithComments} />
                <Route path="/user/:name" component={UserList} />
            </BrowserRouter>
        </div>
    );
}

export default App;