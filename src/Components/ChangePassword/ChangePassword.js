import React, {Component} from "react";
import "./ChangePassword.css";

export default class ChangePassword extends Component {
    render() {
        return (
            <div className="change-password-form">
                <div className="row">
                    <div className="col-12 col-md-6 offset-md-3">
                        <h5 className="text-center mt-3 mb-3">Change Password</h5>
                        <hr/>

                        <div className="input-group mt-5 mb-5">
                            <div className="input-group-prepend">
                <span className="input-group-text">
                <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                </span>
                            </div>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Old Password"
                            />
                        </div>

                        <div className="input-group mt-5 mb-5">
                            <div className="input-group-prepend">
                <span className="input-group-text">
                <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                </span>
                            </div>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="New Password"
                            />
                        </div>

                        <div className="input-group mb-5">
                            <div className="input-group-prepend">
                <span className="input-group-text">
                <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                </span>
                            </div>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm New Password"
                            />
                        </div>

                        <div className="text-center mb-5">
                            <button className="btn btn-outline-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
