import React from "react";
import "./ProfileInfo.css";
import profilePicture from "../../assets/profile/profilepicture.jpg";
import coverPhoto from "../../assets/profile/coverphoto.jpg";
import {Link} from "react-router-dom";

export default function ProfileInfo() {
    return (
        <>
            <div className="cover-photo">
                <img src={coverPhoto} alt=""/>
                <div className="profile-picture">
                    <img src={profilePicture} alt=""/>
                    <p>@namdtfu</p>
                </div>
                {/* <div className="edit-profile-picture">
              <i className="fa fa-pencil-square-o" aria-hidden="true" />
            </div>
            <div className="edit-cover-photo">
              <i className="fa fa-pencil-square-o" aria-hidden="true" />
            </div> */}
            </div>
            <div className="user-setting text-right">
                <Link to="/usersetting">
                    <i className="fa fa-cog" aria-hidden="true"/>
                </Link>
            </div>
            <div className="user-information">
                <div className="user-information-item fullname">
                    <i className="fa fa-address-book" aria-hidden="true"/>
                    <p>Dong Tien Nam</p>
                </div>
                <div className="user-information-item dob">
                    <i className="fa fa-calendar" aria-hidden="true"/>
                    <p>16/09/1999</p>
                </div>
                <div className="user-information-item phone">
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    <p>0888202515</p>
                </div>
                <div className="user-information-item email">
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    <p>namdtfu@gmail.com</p>
                </div>
                <div className="user-information-item address">
                    <i className="fa fa-map-marker" aria-hidden="true"/>
                    <p>Cat Hai, Hai Phong</p>
                </div>
                <div className="user-information-item relationship">
                    <i className="fa fa-heart" aria-hidden="true"/>
                    <p>Single</p>
                </div>
                <div className="user-information-item favourite">
                    <i className="fa fa-thumbs-up" aria-hidden="true"/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde
                        qui corrupti minima quis excepturi minus cum quia voluptatum esse
                        eos mollitia quibusdam modi.
                    </p>
                </div>
            </div>
        </>
    );
}
