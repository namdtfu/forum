import React, {Component} from "react";
import profilePicture from "../../assets/profile/profilepicture.jpg";
import "./NotificationDropdown.css";

export default class NotificationDropdown extends Component {
    render() {
        return (
            <div className="notification-dropdown">
                <div className="notification-items">
                    <div className="notification-item">
                        <div>
                            <img src={profilePicture} alt=""/>
                        </div>
                        <div>
                            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, animi.</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="notification-item">
                        <div>
                            <img src={profilePicture} alt=""/>
                        </div>
                        <div>
                            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, animi.</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="notification-item">
                        <div>
                            <img src={profilePicture} alt=""/>
                        </div>
                        <div>
                            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, animi.</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="notification-item">
                        <div>
                            <img src={profilePicture} alt=""/>
                        </div>
                        <div>
                            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, animi.</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="notification-item">
                        <div>
                            <img src={profilePicture} alt=""/>
                        </div>
                        <div>
                            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, animi.</p>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        );
    }
}
