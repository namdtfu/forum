import React, {Component} from "react";
import ListPeople from "../ListPeople/ListPeople";
import "./ListPeopleDropdown.css";

export default class ListPeopleDropdown extends Component {
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

    renderForm1 = () => <ListPeople name="PB"/>;

    renderForm2 = () => <ListPeople name="S"/>;

    render() {
        return (
            <div className="list-people-dropdown">
                <div className="list-people-dropdown-tab-header">
                    <button
                        className={this.state.renderForm === "1" ? "btn active" : "btn"}
                        onClick={this.handleClick1}
                    >
                        Danh sách Phòng ban
                    </button>
                    <button
                        className={this.state.renderForm === "2" ? "btn active" : "btn"}
                        onClick={this.handleClick2}
                    >
                        Danh sách các Sếp
                    </button>
                </div>
                <div className="mt-3">
                    {this.state.renderForm === "1"
                        ? this.renderForm1()
                        : this.state.renderForm === "2"
                            ? this.renderForm2()
                            : null}
                </div>
            </div>
        );
    }
}
