import React from "react";
import "./ForumInfo.css";
import profilePicture from "../../assets/profile/profilepicture.jpg";
import coverPhoto from "../../assets/profile/coverphoto.jpg";
import {Link} from "react-router-dom";

export default function ForumInfo() {
    return (
        <>
            <div className="cover-photo">
                <img src={coverPhoto} alt=""/>
                <div className="profile-picture">
                    <img src={profilePicture} alt=""/>
                    <p>@gpdvbc</p>
                </div>
                {/* <div className="edit-profile-picture">
              <i className="fa fa-pencil-square-o" aria-hidden="true" />
            </div>
            <div className="edit-cover-photo">
              <i className="fa fa-pencil-square-o" aria-hidden="true" />
            </div> */}
            </div>
            <div className="forum-setting text-right">
                <Link to="/editprofile">
                    <i className="fa fa-cog" aria-hidden="true"/>
                </Link>
            </div>
            <div className="forum-information">
                <div className="forum-information-item fullname">
                    <i className="fa fa-address-book" aria-hidden="true"/>
                    <p>Phòng Giải pháp Dịch vụ Bưu chính</p>
                </div>
                <div className="forum-information-item dob">
                    <i className="fa fa-calendar" aria-hidden="true"/>
                    <p>16/09/2020</p>
                </div>
                <div className="forum-information-item phone">
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    <p>0888202515</p>
                </div>
                <div className="forum-information-item email">
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    <p>namdtfu@gmail.com</p>
                </div>
                <div className="forum-information-item address">
                    <i className="fa fa-map-marker" aria-hidden="true"/>
                    <p>Tầng 3</p>
                </div>
                <div className="forum-information-item-desk favourite">
                    <i className="fa fa-thumbs-up" aria-hidden="true"/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde
                        qui corrupti minima quis excepturi minus cum quia voluptatum esse
                        eos mollitia quibusdam modi, a consequuntur porro voluptas soluta
                        voluptatibus.
                    </p>
                </div>
            </div>
        </>
    );
}
