import React, {Component} from 'react';
import "./HomepageAdmin.css";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import HomePanel from "../HomePanel/HomePanel";
import AddNewUserScreen from "../AddNewUser/AddNewUserScreen/AddNewUserScreen";
import DecentralizationScreen from "../Decentralization/DecentralizationScreen/DecentralizationScreen";
import AddNewUserForm from "../AddNewUser/AddNewUserForm/AddNewUserForm";
import EditUserForm from "../AddNewUser/EditUserForm/EditUserForm";
import AddNewDecentralization from "../Decentralization/AddNewDecentralization/AddNewDecentralization";
import EditDecentralization from "../Decentralization/EditDecentralization/EditDecentralization";


class HomepageAdmin extends Component {
    render() {
        return (
            <>
                <Router>
                    <section className="col-12 col-md-2 col-lg-2 left-dashboard">
                        <div>
                            <hr/>
                            <div>
                                <Link to="/homepageAdmin">
                                    <div>
                                        <i className="fa fa-tachometer" aria-hidden="true"/>
                                    </div>
                                    <div>
                                        <p>Bảng điều khiển</p>
                                    </div>
                                </Link>
                            </div>
                            <hr/>
                            <div>
                                <Link to="/addNewUser">
                                    <div>
                                        <i className="fa fa-list-alt" aria-hidden="true"/>
                                    </div>
                                    <div>
                                        <p>Quản lý người dùng</p>
                                    </div>
                                </Link>
                            </div>
                            <hr/>
                            <div>
                                <Link to="/decentralization">
                                    <div>
                                        <i className="fa fa-list-alt" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <p>Phân quyền người dùng</p>
                                    </div>
                                </Link>
                            </div>
                            <hr/>
                        </div>
                    </section>
                    <section className="col-12 col-md-10 col-lg-10  information-container">
                        <Switch>
                            <Route exact path="/homepageAdmin">
                                <HomePanel/>
                            </Route>
                            <Route path="/addNewUser">
                                <AddNewUserScreen/>
                            </Route>
                            <Route path="/addNewUserForm">
                                <AddNewUserForm/>
                            </Route>
                            <Route path="/editUserForm">
                                <EditUserForm/>
                            </Route>
                            <Route path="/decentralization">
                                <DecentralizationScreen/>
                            </Route>
                            <Route path="/addNewDecentralization">
                                <AddNewDecentralization/>
                            </Route>
                            <Route path="/editDecentralization">
                                <EditDecentralization/>
                            </Route>
                        </Switch>
                    </section>
                </Router>

            </>
        );
    }
}

export default HomepageAdmin;


/*
import React, {Component} from "react";
import HomePanel from "../HomePanel/HomePanel";
import "./HomepageAdmin.css";
import Decentralization from "./../Decentralization/Decentralization";
import AddNewUserScreen from "./../AddNewUser/AddNewUserScreen/AddNewUserScreen";


export default class HomepageAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {renderForm: "1"};
    }

    handleClick1 = () => {
        this.setState({renderForm: "1"});
    };

    handleClick2 = () => {
        this.setState({renderForm: "2"});
    };

    handleClick3 = () => {
        this.setState({renderForm: "3"});
    };


    renderForm1 = () => <HomePanel/>;

    renderForm2 = () => <AddNewUserScreen/>;

    renderForm3 = () => <Decentralization/>;

    render() {
        return (
            <>
                <section className="col-12 col-md-2 col-lg-2 left-dashboard">
                    <div>
                        <hr/>
                        <div onClick={this.handleClick1}>
                            <div>
                                <i className="fa fa-tachometer" aria-hidden="true"></i>
                            </div>
                            <div>
                                <p>Bảng điều khiển</p>
                            </div>
                        </div>
                        <hr/>
                        <div onClick={this.handleClick2}>
                            <div>
                                <i className="fa fa-list-alt" aria-hidden="true"></i>
                            </div>
                            <div>
                                <p>Quản lý người dùng</p>
                            </div>
                        </div>
                        <hr/>
                        <div onClick={this.handleClick3}>
                            <div>
                                <i className="fa fa-list-alt" aria-hidden="true"></i>
                            </div>
                            <div>
                                <p>Phân quyền người dùng</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </section>
                <section className="col-12 col-md-10 col-lg-10  information-container">
                    {this.state.renderForm === "1"
                        ? this.renderForm1()
                        : this.state.renderForm === "2"
                            ? this.renderForm2()
                            : this.state.renderForm === "3"
                                ? this.renderForm3()
                                : null}
                </section>
            </>
        );
    }
}
*/