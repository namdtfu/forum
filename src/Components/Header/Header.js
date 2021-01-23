import React, {Component} from "react";
import "./Header.css";
import logo from "../../assets/header/logo.jpg";
import profilePicture from "../../assets/profile/profilepicture.jpg";
import {Link} from "react-router-dom";
import NotificationDropdown from "../NotificationDropdown/NotificationDropdown";
import ListPeopleDropdown from "../ListPeopleDropdown/ListPeopleDropdown";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleNotiOn: false,
            isToggleListOn: false,
        };
    }

    handleNotiClick = () => {
        this.setState((state) => ({
            isToggleNotiOn: !state.isToggleNotiOn,
        }));
    }

    handleListClick = () => {
        this.setState((state) => ({
            isToggleListOn: !state.isToggleListOn,
        }));
    }

    render() {
        return (
            <header className="col-12 col-md-12 header">
                <nav className="header-bar">
                    <div className="header-left">
                        <Link to="/" className="logo">
                            <img src={logo} alt=""/>
                        </Link>
                        <div className="header-input">
                            <i className="fa fa-search" aria-hidden="true"/>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="header-center">
                        <div className="header-option header-option-active">
                            <Link to="/">
                                <i className="fa fa-home" aria-hidden="true"/>
                            </Link>
                        </div>
                        <div className="header-option">
                            <Link to="/forum">
                                <i className="fa fa-users" aria-hidden="true"/>
                            </Link>
                        </div>
                        <div className="header-option" onClick={this.handleListClick} id="displayDiv">
                            <Link>
                                <i className="fa fa-list-alt" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="header-info">
                            <div>
                                <img src={profilePicture} alt=""/>
                            </div>
                            <Link to="/personalpage">
                                <h6>Nam Dong</h6>
                            </Link>
                        </div>
                        <div className="header-notification" onClick={this.handleNotiClick}>
                            <i className="fa fa-bell bell-noti-icon"></i>
                            <div className="bell-noti-status"></div>
                            {/* <i className="fa fa-bell" aria-hidden="true" /> */}
                        </div>
                    </div>
                </nav>
                {this.state.isToggleNotiOn ? <NotificationDropdown/> : ""}
                {this.state.isToggleListOn ? <ListPeopleDropdown/> : ""}
            </header>
        );
    }
}
