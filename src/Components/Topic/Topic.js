import React, {Component} from "react";
import ReactHtmlParser from "react-html-parser";
import profilePicture from "../../assets/profile/profilepicture.jpg";
import "./Topic.css";
import {Link} from "react-router-dom";

export default class Topic extends Component {
    render() {
        const htmlParse =
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla quisquam magnam tempora enim eos architecto atque voluptates veritatis consequuntur rerum nobis beatae, ipsum adipisci consectetur numquam laboriosam, neque commodi placeat. Quia architecto aspernatur, beatae iusto voluptas asperiores pariatur, sed facilis eveniet maxime distinctio esse optio possimus accusamus hic perferendis fugiat exercitationem similique non. Quos unde sunt quae animi repudiandae, sint vitae tempora, nesciunt consectetur nulla cum earum iste adipisci nihil reiciendis maxime excepturi facilis, totam veritatis! Labore cum deserunt modi porro suscipit debitis totam quis reiciendis numquam quo magnam tenetur ex itaque perferendis iure, soluta dolorem ut at veniam.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla quisquam magnam tempora enim eos architecto atque voluptates veritatis consequuntur rerum nobis beatae, ipsum adipisci consectetur numquam laboriosam, neque commodi placeat. Quia architecto aspernatur, beatae iusto voluptas asperiores pariatur, sed facilis eveniet maxime distinctio esse optio possimus accusamus hic perferendis fugiat exercitationem similique non. Quos unde sunt quae animi repudiandae, sint vitae tempora, nesciunt consectetur nulla cum earum iste adipisci nihil reiciendis maxime excepturi facilis, totam veritatis! Labore cum deserunt modi porro suscipit debitis totam quis reiciendis numquam quo magnam tenetur ex itaque perferendis iure, soluta dolorem ut at veniam.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla quisquam magnam tempora enim eos architecto atque voluptates veritatis consequuntur rerum nobis beatae, ipsum adipisci consectetur numquam laboriosam, neque commodi placeat. Quia architecto aspernatur, beatae iusto voluptas asperiores pariatur, sed facilis eveniet maxime distinctio esse optio possimus accusamus hic perferendis fugiat exercitationem similique non. Quos unde sunt quae animi repudiandae, sint vitae tempora, nesciunt consectetur nulla cum earum iste adipisci nihil reiciendis maxime excepturi facilis, totam veritatis! Labore cum deserunt modi porro suscipit debitis totam quis reiciendis numquam quo magnam tenetur ex itaque perferendis iure, soluta dolorem ut at veniam.</p>";
        return (
            <div className="row">
                <div className="col-12 col-md-12 topic">
                    <div>
                        <div className="topic-top">
                            <div className="topic-avatar">
                                <img src={profilePicture} alt=""/>
                            </div>
                            <div className="topic-top-info">
                                <div>
                                    <Link to="/personalpage">
                                        <h6>Nam Dong</h6>
                                    </Link>
                                    <p>đã đăng trong</p>
                                    <Link to="/forum">
                                        <h6>Phòng hành chính công</h6>
                                    </Link>
                                </div>
                                <p>Date</p>
                            </div>
                        </div>
                        <Link to="/topicdetail">
                            <div className="topic-bottom">
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla quisquam magnam
                                    tempora enim eos architecto atque voluptates veritatis conse rerum nobis
                                    beatae.</h6>
                                {ReactHtmlParser(htmlParse)}
                                <div className="bg-blur"></div>
                            </div>
                        </Link>
                        <div className="topic-options">
                            <div className="topic-option">
                                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                                <p>0 Likes</p>
                            </div>
                            <div className="topic-option">
                                <i className="fa fa-comments" aria-hidden="true"></i>
                                <p>0 Comments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
