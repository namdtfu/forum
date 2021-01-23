import React, {Component} from "react";
import ForumInfo from "../ForumInfo/ForumInfo";
import "./ForumSidebar.css";

export default class ForumSidebar extends Component {
    render() {
        return (
            <div className="forum-info">
                <ForumInfo/>
            </div>
        );
    }
}
