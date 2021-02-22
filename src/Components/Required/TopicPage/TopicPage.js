import React, {Component} from 'react';
import ForumSidebar from "../../ForumSidebar/ForumSidebar";
import "./TopicPage.css"
import {Link} from "react-router-dom";
import TopicList from "../TopicList/TopicList";

class TopicPage extends Component {
    render() {
        return (
            <>
                <section className="col-12 col-md-12 offset-lg-2 col-lg-8 mt-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/forum">Forum</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Bưu chính chuyển phát</li>
                        </ol>
                    </nav>

                    <div className="block-header-topic mt-3">
                        <div className="topic-title">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officia?</p>
                        </div>
                        <div className="post-topic">
                            <Link to="/topicSender"><button className="btn btn-primary"><i className="fa fa-pencil-square-o" aria-hidden="true"/>&nbsp;Post Topic</button></Link>
                        </div>
                    </div>
                </section>

                <section className="col-12 col-md-12 col-lg-5 offset-lg-2 forum mt-3" id="second">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <TopicList />

                </section>

                <section className="col-12 col-md-12 col-lg-3 forum-sidebar mt-3" id="first">
                    <ForumSidebar/>
                </section>
            </>
        );
    }
}

export default TopicPage;