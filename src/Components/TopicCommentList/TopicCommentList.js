import React, {Component} from "react";
import profilePicture from "../../assets/profile/profilepicture.jpg";
import {Link} from "react-router-dom";
import "./TopicCommentList.css";
import ReactHtmlParser from "react-html-parser";

export default class TopicCommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state) => ({
            isToggleOn: !state.isToggleOn,
        }));
    }

    render() {
        const htmlParse =
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla quisquam magnam tempora enim eos architecto atque voluptates veritatis consequuntur rerum nobis beatae, ipsum adipisci consectetur numquam laboriosam, neque commodi placeat. Quia architecto aspernatur, beatae iusto voluptas asperiores pariatur, sed facilis eveniet maxime distinctio esse optio possimus accusamus hic perferendis fugiat exercitationem similique non. Quos unde sunt quae animi repudiandae, sint vitae tempora, nesciunt consectetur nulla cum earum iste adipisci nihil reiciendis maxime excepturi facilis, totam veritatis! Labore cum deserunt modi porro suscipit debitis totam quis reiciendis numquam quo magnam tenetur ex itaque perferendis iure, soluta dolorem ut at veniam.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla quisquam magnam tempora enim eos architecto atque voluptates veritatis consequuntur rerum nobis beatae, ipsum adipisci consectetur numquam laboriosam, neque commodi placeat. Quia architecto aspernatur, beatae iusto voluptas asperiores pariatur, sed facilis eveniet maxime distinctio esse optio possimus accusamus hic perferendis fugiat exercitationem similique non. Quos unde sunt quae animi repudiandae, sint vitae tempora, nesciunt consectetur nulla cum earum iste adipisci nihil reiciendis maxime excepturi facilis, totam veritatis! Labore cum deserunt modi porro suscipit debitis totam quis reiciendis numquam quo magnam tenetur ex itaque perferendis iure, soluta dolorem ut at veniam.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla quisquam magnam tempora enim eos architecto atque voluptates veritatis consequuntur rerum nobis beatae, ipsum adipisci consectetur numquam laboriosam, neque commodi placeat. Quia architecto aspernatur, beatae iusto voluptas asperiores pariatur, sed facilis eveniet maxime distinctio esse optio possimus accusamus hic perferendis fugiat exercitationem similique non. Quos unde sunt quae animi repudiandae, sint vitae tempora, nesciunt consectetur nulla cum earum iste adipisci nihil reiciendis maxime excepturi facilis, totam veritatis! Labore cum deserunt modi porro suscipit debitis totam quis reiciendis numquam quo magnam tenetur ex itaque perferendis iure, soluta dolorem ut at veniam.</p>";

        return (
            <div className="row">
                <div className="col-12 col-md-12 topic-comment-list">
                    <div>
                        <div className="topic-comment-list-top">
                            <div className="topic-comment-list-avatar">
                                <img src={profilePicture} alt=""/>
                            </div>
                            <div className="topic-comment-list-top-info">
                                <Link to="/personalpage">
                                    <h6>Nam Dong</h6>
                                </Link>
                                <p>Date</p>
                            </div>
                        </div>
                        <div
                            className={this.state.isToggleOn ? "topic-comment-list-bottom" : "topic-comment-list-bottom-expand"}>
                            {ReactHtmlParser(htmlParse)}
                            <div className={this.state.isToggleOn ? "bg-blur" : ""}></div>
                            <div className="text-center btn-more">
                                <button className="btn btn-primary" onClick={this.handleClick}>
                                    {this.state.isToggleOn ? "Xem thêm" : "Thu gọn"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
