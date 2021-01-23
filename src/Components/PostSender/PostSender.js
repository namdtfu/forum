import React, {Component} from "react";
import "./PostSender.css"
import profilePicture from "../../assets/profile/profilepicture.jpg";
import demo1 from "../../assets/demo/demo1.jpg";
import demo2 from "../../assets/demo/demo2.jpg";
import demo3 from "../../assets/demo/demo3.jpg";

export default class PostSender extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-12 ">
                    <div className="postSender">
                        <div className="postSender-top">
                            <div>
                                <div>
                                    <img src={profilePicture} alt=""/>
                                </div>
                                <textarea
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    className=""
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                        <div className="postSender-middle">
                            <div>
                                <div className="image-upload ">
                                    <div className="image">
                                        <img src={demo1} alt=""/>
                                    </div>
                                    <div className="btn-delete">
                                        <i className="fa fa-trash" aria-hidden="true"/>
                                    </div>
                                </div>
                                <div className="image-upload ">
                                    <div className="image">
                                        <img src={demo2} alt=""/>
                                    </div>
                                    <div className="btn-delete">
                                        <i className="fa fa-trash" aria-hidden="true"/>
                                    </div>
                                </div>
                                <div className="image-upload ">
                                    <div className="image">
                                        <img src={demo3} alt=""/>
                                    </div>
                                    <div className="btn-delete">
                                        <i className="fa fa-trash" aria-hidden="true"/>
                                    </div>
                                </div>
                                <div className="image-upload ">
                                    <div className="image">
                                        <img src={demo1} alt=""/>
                                    </div>
                                    <div className="btn-delete">
                                        <i className="fa fa-trash" aria-hidden="true"/>
                                    </div>
                                </div>
                                <div className="image-upload ">
                                    <div className="image">
                                        <img src={demo2} alt=""/>
                                    </div>
                                    <div className="btn-delete">
                                        <i className="fa fa-trash" aria-hidden="true"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="postSender-bottom">
                            <div className="postSender-option">
                                <i className="fa fa-picture-o" aria-hidden="true"/>
                                <h6>Photo</h6>
                            </div>
                            <div className="postSender-option">
                                <i className="fa fa-location-arrow" aria-hidden="true"/>
                                <h6>Post</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
