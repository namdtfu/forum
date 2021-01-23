import React, {Component} from "react";
import PostSender from "../PostSender/PostSender";
import Post from "../Post/Post";
import ProfileSidebar from "../ProfileSidebar/ProfileSidebar";

export default class PersonalPage extends Component {
    render() {
        return (
            <>
                <section className="col-12 col-md-12 col-lg-5 offset-lg-2 newfeed mt-3" id="second">
                    <PostSender/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </section>
                <section className="col-12 col-md-12 col-lg-3 profile-sidebar mt-3" id="first">
                    <ProfileSidebar/>
                </section>
            </>
        );
    }
}
