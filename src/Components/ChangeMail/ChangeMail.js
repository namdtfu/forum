import React, {Component} from "react";

export default class ChangeMail extends Component {
    render() {
        return (
            <div className="change-password-form">
                <div className="row">
                    <div className="col-12 col-md-6 offset-md-3">
                        <h5 className="text-center mt-3 mb-3">Change Mail</h5>
                        <hr/>

                        <div className="input-group mt-5 mb-5">
                            <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
                            </div>
                            <input
                                type="mail"
                                className="form-control"
                                placeholder="Old Mail"
                            />
                        </div>

                        <div className="input-group mt-5 mb-5">
                            <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
                            </div>
                            <input
                                type="mail"
                                className="form-control"
                                placeholder="New Mail"
                            />
                        </div>

                        <div className="input-group mb-5">
                            <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
                            </div>
                            <input
                                type="mail"
                                className="form-control"
                                placeholder="Confirm New Mail"
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
