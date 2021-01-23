import React, {Component} from "react";
import TopicPost from "../TopicPost/TopicPost";
import TopicDetailSidebar from "../TopicDetailSidebar/TopicDetailSidebar";
import TopicComment from "../TopicComment/TopicComment";
import TopicCommentList from "./../TopicCommentList/TopicCommentList";

export default class TopicDetailPage extends Component {
    render() {
        return (
            <>
                <section className="col-12 col-md-5 offset-md-2 mt-3" id="second">
                    <TopicPost/>
                    <TopicComment/>
                    <TopicCommentList/>
                    <TopicCommentList/>
                    <TopicCommentList/>
                </section>
                <section className="col-12 col-md-3 topic-detail-sidebar mt-3" id="first">
                    <TopicDetailSidebar/>
                </section>
            </>
        );
    }
}
