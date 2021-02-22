import React, {Component} from 'react';
import ForumSidebar from "../../ForumSidebar/ForumSidebar";
import {Link} from "react-router-dom";
import TopicComment from "../../TopicComment/TopicComment";
import TopicDetailSidebar from "../../TopicDetailSidebar/TopicDetailSidebar";
import TopicPost from "../../TopicPost/TopicPost";
import TopicCommentList from "../../TopicCommentList/TopicCommentList";


class TopicDetailPage extends Component {
    render() {
        return (
            <>
                <section className="col-12 col-md-12 offset-lg-2 col-lg-8 mt-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/topicList">Forum</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Bưu chính chuyển phát</li>
                        </ol>
                    </nav>
                    <div className="block-header-topic mt-3">
                        <div className="topic-title">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nisi perferendis porro
                                quia totam. Ab consequuntur dolorum earum,
                                eveniet expedita laudantium nisi odit quibusdam sint sit temporibus unde. Consequatur,
                                rerum!</p>
                            <span>
                                <i className="fa fa-user-circle-o" aria-hidden="true"/>&nbsp;
                                <cite>@tiennam</cite>&nbsp;-&nbsp;
                                <i className="fa fa-clock-o" aria-hidden="true"/>&nbsp;
                                <cite title="">Dec 19, 2020</cite>
                            </span>
                        </div>
                    </div>
                </section>
                <section className="col-12 col-md-5 offset-md-2 mt-3" id="second">
                    <TopicPost/>
                    <TopicComment/>
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

export default TopicDetailPage;