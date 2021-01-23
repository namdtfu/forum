import React, {Component} from "react";
import "./NewfeedSidebar.css";
import ListPeople from "./../ListPeople/ListPeople";

export default class NewfeedSidebar extends Component {
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
            <div>
                <div>
                    <div className="sidebar-tab-header">
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
                {/* <p className="mt-5">IT-VNPost Inc © 2020. All rights reserved</p>
        <p className="mt-2">
          Made by{" "}
          <a href="https://www.facebook.com/christian16999/">Tiến Nam</a> with
          love💕
        </p> */}
            </div>
        );
    }
}


// import React, { Component } from "react";
// import "./NewfeedSidebar.css";
// import ListPeople from "./../ListPeople/ListPeople";

// export default class NewfeedSidebar extends Component {
//   render() {
//     return (
//       <div>
//         <div>
//           <ListPeople name="List các phòng ban" />
//         </div>

//         <div className="mt-5">
//           <ListPeople name="List các sếp" />
//         </div>
//         <p className="mt-5">IT-VNPost Inc © 2020. All rights reserved</p>
//         <p className="mt-2">
//           Made by{" "}
//           <a href="https://www.facebook.com/christian16999/">Tiến Nam</a> with
//           love💕
//         </p>
//       </div>
//     );
//   }
// }
