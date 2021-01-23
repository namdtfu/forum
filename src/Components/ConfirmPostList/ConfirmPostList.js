import React, {Component} from "react";
import AConfirmPost from "../AConfirmPost/AConfirmPost";
import "./ConfirmPostList.css";

export default class ConfirmPostList extends Component {


    render() {
        return (
            <>
                <section className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3 confirm-post-list mt-3">
                    <AConfirmPost/>
                    <AConfirmPost/>
                    <AConfirmPost/>
                    <AConfirmPost/>
                    <AConfirmPost/>
                </section>
            </>
        );
    }
}
