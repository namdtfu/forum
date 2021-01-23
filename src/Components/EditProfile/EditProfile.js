import React, {Component} from "react";
import "./EditProfile.css";
import profilePicture from "../../assets/profile/profilepicture.jpg";
import coverPhoto from "../../assets/profile/coverphoto.jpg";

export default class EditProfile extends Component {
    render() {
        return (
            <div className="edit-profile-form">
                <div className="row">
                    <div className="col-12 col-md-6 mt-5">
                        <h6 className="float-left">Profile Picture</h6>
                    </div>
                    <div className="col-12 col-md-6 mt-5 ">
                        <button className="btn float-right">Edit</button>
                    </div>

                    <div className="col-12 col-md-12 ">
                        <div>
                            <img src={profilePicture} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 mt-5">
                        <h6 className="float-left">Cover Photo</h6>
                    </div>
                    <div className="col-12 col-md-6 mt-5 ">
                        <button className="btn float-right">Edit</button>
                    </div>

                    <div className="col-12 col-md-12 ">
                        <div>
                            <img src={coverPhoto} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12 col-md-6 mt-5">
                        <i className="fa fa-address-book" aria-hidden="true"/>
                        <input type="text" placeholder="Dong Tien Nam"/>
                    </div>
                    <div className="col-12 col-md-6 mt-5">
                        <i className="fa fa-calendar" aria-hidden="true"/>
                        <input type="text" placeholder="16/09/1999"/>
                    </div>
                    {/* <div className="col-12 col-md-6 mt-5">
            <i className="fa fa-phone-square" aria-hidden="true" />
            <input type="text" placeholder="0888202515" />
          </div>
          <div className="col-12 col-md-6 mt-5">
            <i className="fa fa-envelope" aria-hidden="true" />
            <input type="text" placeholder="namdtfu@gmail.com" />
          </div> */}
                    <div className="col-12 col-md-6 mt-5">
                        <i className="fa fa-map-marker" aria-hidden="true"/>
                        <input type="text" placeholder="Cat Hai, Hai Phong"/>
                    </div>
                    <div className="col-12 col-md-6 mt-5">
                        <i className="fa fa-heart" aria-hidden="true"/>
                        <input type="text" placeholder="Single"/>
                    </div>
                    <div className="col-12 col-md-12 mt-5">
                        <i className="fa fa-thumbs-up" aria-hidden="true"/>
                        <textarea
                            cols={30}
                            rows={4}
                            className="comment-input"
                            defaultValue={
                                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde qui corrupti minima quis excepturi minus cum quia voluptatum esse eos mollitia quibusdam modi, a consequuntur porro voluptas soluta voluptatibus."
                            }
                        />
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12 col-md-12">
                        <div className="text-center">
                            <button className="btn btn-outline-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
