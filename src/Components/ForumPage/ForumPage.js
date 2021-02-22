import React, {Component} from "react";
import ForumSidebar from "../ForumSidebar/ForumSidebar";
import Topic from "../Topic/Topic";
import TopicSender from "../TopicSender/TopicSender";
import ForumList from "../Required/ForumList/ForumList";

export default class ForumPage extends Component {
    render() {
        return (
            <>
                <section className="col-12 col-md-12 col-lg-5 offset-lg-2 forum mt-3" id="second">
                    {/*<TopicSender/>*/}
                    {/*<Topic/>*/}
                    <ForumList />
                    <ForumList />
                    <ForumList />
                    <ForumList />
                    <ForumList />
                </section>

                <section className="col-12 col-md-12 col-lg-3 forum-sidebar mt-3" id="first">
                    <ForumSidebar/>
                </section>
            </>
        );
    }
}
