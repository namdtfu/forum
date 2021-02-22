import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import UserSetting from "./Components/UserSetting/UserSetting";
import Header from "./Components/Header/Header";
import PersonalPage from "./Components/PersonalPage/PersonalPage";
import Newfeed from "./Components/Newfeed/Newfeed";
import ForumPage from "./Components/ForumPage/ForumPage";
import ConfirmPostList from "./Components/ConfirmPostList/ConfirmPostList";
import HomepageAdmin from "./Components/Admin/HomepageAdmin/HomepageAdmin";
import AddNewUserForm from "./Components/Admin/AddNewUser/AddNewUserForm/AddNewUserForm";
import TopicPage from "./Components/Required/TopicPage/TopicPage";
import TopicSender from "./Components/TopicSender/TopicSender";
import PostATopic from "./Components/Required/PostATopic/PostATopic";
import TopicDetailPage from "./Components/Required/TopicDetailPage/TopicDetailPage";

function App() {
    return (
        <div className="app container-fluid">
            <div className="row">
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path="/">
                            <Newfeed/>
                        </Route>
                        <Route path="/usersetting">
                            <UserSetting/>
                        </Route>
                        <Route path="/personalpage">
                            <PersonalPage/>
                        </Route>
                        <Route path="/forum">
                            <ForumPage/>
                        </Route>
                        <Route path="/topicList">
                            <TopicPage/>
                        </Route>
                        <Route path="/topicSender">
                            <PostATopic/>
                        </Route>
                        <Route path="/topicdetail">
                            <TopicDetailPage/>
                        </Route>
                        <Route path="/confirmPostList">
                            <ConfirmPostList/>
                        </Route>
                        <Route path="/homepageAdmin">
                            <HomepageAdmin/>
                        </Route>
                        <Route path="/addNewUserForm">
                            <AddNewUserForm/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
