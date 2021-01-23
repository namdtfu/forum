import React, {Component} from "react";
import NewfeedSidebar from "../NewfeedSidebar/NewfeedSidebar";
import Post from "../Post/Post";
import Topic from "../Topic/Topic";

export default class Newfeed extends Component {
    render() {
        return (
            <>
                <section
                    className="col-12 col-md-12 col-lg-5 offset-lg-2 newfeed mt-3"
                    id="second"
                >
                    <Post/>
                    <Topic/>
                    <Post/>
                    <Topic/>
                    <Post/>
                    <Topic/>
                    <Post/>
                    <Topic/>
                    <Post/>
                </section>
                <section
                    className="col-12 col-md-4 col-lg-3 newfeed-sidebar mt-3"
                    id="hiddenDiv"
                >
                    <NewfeedSidebar/>
                </section>
            </>
        );
    }
}
