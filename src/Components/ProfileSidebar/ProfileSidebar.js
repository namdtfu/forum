import React, {Component} from "react";
import "./ProfileSidebar.css";
import ProfileInfo from "./../ProfileInfo/ProfileInfo";
import {Link} from "react-router-dom";

export default class ProfileSidebar extends Component {
    render() {
        return (
            <div className="profile-info">
                <ProfileInfo/>
                <Link to="/confirmPostList">
                    <button className="mt-3 btn btn-outline-dark">
                        Bạn có bài viết mới cần phê duyệt
                    </button>
                </Link>
            </div>
        );
    }
}
