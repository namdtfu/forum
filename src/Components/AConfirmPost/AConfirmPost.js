import React, {Component} from "react";
import profilePicture from "../../assets/profile/profilepicture.jpg";
import "./AConfirmPost.css";
import demo1 from "../../assets/demo/demo1.jpg";
import demo2 from "../../assets/demo/demo2.jpg";
import demo3 from "../../assets/demo/demo3.jpg";
import {Link} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import Slider from "react-slick";

export default class AConfirmPost extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state) => ({
            isToggleOn: !state.isToggleOn,
        }));
    }

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
                <div className="col-12 col-md-12 confirm-post">
                    <div>
                        <div className="confirm-post-top">
                            <div className="confirm-post-avatar">
                                <img src={profilePicture} alt=""/>
                            </div>
                            <div className="confirm-post-top-info">
                                <Link to="/personalpage">
                                    <h6>Nam Dong</h6>
                                </Link>
                                <p>Date</p>
                            </div>
                        </div>
                        <div
                            className={
                                this.state.isToggleOn
                                    ? "confirm-post-bottom"
                                    : "confirm-post-bottom-expand"
                            }
                        >
                            {ReactHtmlParser(htmlParse)}
                            <div className={this.state.isToggleOn ? "bg-blur" : ""}></div>
                            <div className="text-center btn-more">
                                <button className="btn btn-primary" onClick={this.handleClick}>
                                    {this.state.isToggleOn ? "Xem thêm" : "Thu gọn"}
                                </button>
                            </div>
                        </div>
                        <div className="confirm-post-image">
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
                        <div className="confirm-post-options">
                            <div className="confirm-post-option">
                                <i className="fa fa-check" aria-hidden="true"></i>
                                <p>Confirm</p>
                            </div>
                            <div className="confirm-post-option">
                                <i className="fa fa-trash" aria-hidden="true"></i>
                                <p>Delete</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
