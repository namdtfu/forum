import React, {Component} from "react";
import "./UserSetting.css";
import EditProfile from "../EditProfile/EditProfile";
import ChangePassword from "../ChangePassword/ChangePassword";
import ChangePhone from "../ChangePhone/ChangePhone";
import ChangeMail from "../ChangeMail/ChangeMail";

export default class UserSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {renderForm: "1"};
    }

    handleClick1 = () => {
        this.setState({renderForm: "1"});
    }

    handleClick2 = () => {
        this.setState({renderForm: "2"});
    }

    handleClick3 = () => {
        this.setState({renderForm: "3"});
    }

    handleClick4 = () => {
        this.setState({renderForm: "4"});
    }

    renderForm1 = () => <EditProfile/>;

    renderForm2 = () => <ChangePassword/>;

    renderForm3 = () => <ChangePhone/>;

    renderForm4 = () => <ChangeMail/>;

    render() {

        return (
            <div className="col-12 col-md-6 offset-md-3 mt-3 edit-profile">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-12 tab-header">
                            <button className={(this.state.renderForm === "1") ? "btn active" : "btn"}
                                    onClick={this.handleClick1}>Edit Profile
                            </button>
                            <button className={(this.state.renderForm === "2") ? "btn active" : "btn"}
                                    onClick={this.handleClick2}>Change Password
                            </button>
                            <button className={(this.state.renderForm === "3") ? "btn active" : "btn"}
                                    onClick={this.handleClick3}>Change Phone
                            </button>
                            <button className={(this.state.renderForm === "4") ? "btn active" : "btn"}
                                    onClick={this.handleClick4}>Change Mail
                            </button>
                        </div>
                    </div>
                    {this.state.renderForm === "1"
                        ? this.renderForm1()
                        : this.state.renderForm === "2"
                            ? this.renderForm2()
                            : this.state.renderForm === "3"
                                ? this.renderForm3()
                                : this.state.renderForm === "4"
                                    ? this.renderForm4()
                                    : null}

                </div>

            </div>
        );
    }
}
