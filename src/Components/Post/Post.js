import React, {Component} from "react";
import "./Post.css";
import profilePicture from "../../assets/profile/profilepicture.jpg";
import Slider from "react-slick";

import demo1 from "../../assets/demo/demo1.jpg";
import demo2 from "../../assets/demo/demo2.jpg";
import demo3 from "../../assets/demo/demo3.jpg";
import {Link} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import OptionDropdown from "../OptionDropdown/OptionDropdown";

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleExpandOn: true,
            isOptionDropdown: false,
        };
    }

    handleClickExpandOn = () => {
        this.setState((state) => ({
            isToggleExpandOn: !state.isToggleExpandOn,
        }));
    };
    handleClickOptionDropdown = () => {
        this.setState((state) => ({
            isOptionDropdown: !state.isOptionDropdown,
        }));
    };

    render() {
        const htmlParse =
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla quisquam magnam tempora enim eos architecto atque voluptates veritatis consequuntur rerum nobis beatae, ipsum adipisci consectetur numquam laboriosam, neque commodi placeat. Quia architecto aspernatur, beatae iusto voluptas asperiores pariatur, sed facilis eveniet maxime distinctio esse optio possimus accusamus hic perferendis fugiat exercitationem similique non. Quos unde sunt quae animi repudiandae, sint vitae tempora, nesciunt consectetur nulla cum earum iste adipisci nihil reiciendis maxime excepturi facilis, totam veritatis! Labore cum deserunt modi porro suscipit debitis totam quis reiciendis numquam quo magnam tenetur ex itaque perferendis iure, soluta dolorem ut at veniam.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla quisquam magnam tempora enim eos architecto atque voluptates veritatis consequuntur rerum nobis beatae, ipsum adipisci consectetur numquam laboriosam, neque commodi placeat. Quia architecto aspernatur, beatae iusto voluptas asperiores pariatur, sed facilis eveniet maxime distinctio esse optio possimus accusamus hic perferendis fugiat exercitationem similique non. Quos unde sunt quae animi repudiandae, sint vitae tempora, nesciunt consectetur nulla cum earum iste adipisci nihil reiciendis maxime excepturi facilis, totam veritatis! Labore cum deserunt modi porro suscipit debitis totam quis reiciendis numquam quo magnam tenetur ex itaque perferendis iure, soluta dolorem ut at veniam.</p>";

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
            <div className="row">
                <div className="col-12 col-md-12 post">
                    <div>
                        <div className="post-top">
                            <div>
                                <div className="post-avatar">
                                    <img src={profilePicture} alt=""/>
                                </div>
                                <div className="post-top-info">
                                    <Link to="/personalpage">
                                        <h6>Nam Dong</h6>
                                    </Link>
                                    <p>Date</p>
                                </div>
                            </div>

                            <div>
                                <div onClick={this.handleClickOptionDropdown}>
                                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div
                            className={
                                this.state.isToggleExpandOn
                                    ? "post-bottom"
                                    : "post-bottom-expand"
                            }
                        >
                            {ReactHtmlParser(htmlParse)}
                            <div
                                className={this.state.isToggleExpandOn ? "bg-blur" : ""}
                            ></div>
                            <div className="text-center btn-more">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.handleClickExpandOn}
                                >
                                    {this.state.isToggleExpandOn ? "Xem thêm" : "Thu gọn"}
                                </button>
                            </div>
                        </div>
                        <div className="post-image">
                            <div>
                                <Slider {...settings}>
                                    <div>
                                        <img src={demo1} alt=""/>
                                    </div>
                                    <div>
                                        <img src={demo2} alt=""/>
                                    </div>
                                    <div>
                                        <img src={demo3} alt=""/>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="post-options">
                            <div className="post-option">
                                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                                <p>0 Likes</p>
                            </div>
                            <div className="post-option">
                                <i className="fa fa-comments" aria-hidden="true"></i>
                                <p>0 Comments</p>
                            </div>
                        </div>
                        <div className="post-my-comments">
                            <div>
                                <div>
                                    <img src={profilePicture} alt=""/>
                                </div>
                                <textarea
                                    cols={30}
                                    rows={4}
                                    className="comment-input"
                                    defaultValue={""}
                                />
                                <div>
                                    <i className="fa fa-location-arrow" aria-hidden="true"/>
                                    <h6>Post</h6>
                                </div>
                            </div>
                        </div>
                        <div className="list-comments">
                            <div className="mb-4">
                                <div>
                                    <img src={profilePicture} alt=""/>
                                </div>
                                <div>
                                    <p>Nam Dong</p>
                                    <textarea
                                        cols={30}
                                        rows={2}
                                        className="comment-input"
                                        defaultValue={
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, facere."
                                        }
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <div>
                                    <img src={profilePicture} alt=""/>
                                </div>
                                <div>
                                    <p>Phong Dan</p>
                                    <textarea
                                        cols={30}
                                        rows={2}
                                        className="comment-input"
                                        defaultValue={
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, facere."
                                        }
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <div>
                                    <img src={profilePicture} alt=""/>
                                </div>
                                <div>
                                    <p>Bang cho</p>
                                    <textarea
                                        cols={30}
                                        rows={2}
                                        className="comment-input"
                                        defaultValue={
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, facere."
                                        }
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.isOptionDropdown ? <OptionDropdown/> : ""}
                </div>

            </div>
        );
    }
}
