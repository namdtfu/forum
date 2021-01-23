import React, {Component} from "react";
import "./TopicPost.css";
import {Link} from "react-router-dom";
import profilePicture from "../../assets/profile/profilepicture.jpg";

export default class TopicPost extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-12 topic-post">
                    <div>
                        <div className="topic-post-top">
                            <div className="topic-post-avatar">
                                <img src={profilePicture} alt=""/>
                            </div>
                            <div className="topic-post-top-info">
                                <Link to="/personalpage">
                                    <h6>Nam Dong</h6>
                                </Link>
                                <p>Date</p>
                            </div>
                        </div>
                        <div className="topic-post-bottom">
                            <h6>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                                earum animi magni magnam error cum architecto ex odit adipisci,
                                quisquam optio. Aliquam esse saepe cumque atque labore excepturi
                                impedit voluptatum.
                            </h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sequi commodi reiciendis
                                totam laboriosam? In, saepe suscipit consectetur, laborum velit nisi rem, alias harum
                                laboriosam culpa repudiandae asperiores. Veritatis quae soluta eum accusamus blanditiis
                                ex voluptas deleniti fuga nisi, illum iusto libero doloribus incidunt consectetur,
                                reiciendis, dolorum sed placeat repudiandae laudantium! Rem necessitatibus dicta maiores
                                ea tempore quae, officia doloribus ipsum impedit quidem illum, ex ad aspernatur soluta
                                aut consequuntur! Ratione, sed corrupti? Quisquam explicabo commodi quaerat impedit
                                eaque voluptates nostrum laudantium modi ipsam necessitatibus, neque totam, eligendi
                                odit assumenda voluptatum? Pariatur, quidem unde repellat aut veniam eligendi!
                                Reiciendis, assumenda?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sequi commodi reiciendis
                                totam laboriosam? In, saepe suscipit consectetur, laborum velit nisi rem, alias harum
                                laboriosam culpa repudiandae asperiores. Veritatis quae soluta eum accusamus blanditiis
                                ex voluptas deleniti fuga nisi, illum iusto libero doloribus incidunt consectetur,
                                reiciendis, dolorum sed placeat repudiandae laudantium! Rem necessitatibus dicta maiores
                                ea tempore quae, officia doloribus ipsum impedit quidem illum, ex ad aspernatur soluta
                                aut consequuntur! Ratione, sed corrupti? Quisquam explicabo commodi quaerat impedit
                                eaque voluptates nostrum laudantium modi ipsam necessitatibus, neque totam, eligendi
                                odit assumenda voluptatum? Pariatur, quidem unde repellat aut veniam eligendi!
                                Reiciendis, assumenda?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sequi commodi reiciendis
                                totam laboriosam? In, saepe suscipit consectetur, laborum velit nisi rem, alias harum
                                laboriosam culpa repudiandae asperiores. Veritatis quae soluta eum accusamus blanditiis
                                ex voluptas deleniti fuga nisi, illum iusto libero doloribus incidunt consectetur,
                                reiciendis, dolorum sed placeat repudiandae laudantium! Rem necessitatibus dicta maiores
                                ea tempore quae, officia doloribus ipsum impedit quidem illum, ex ad aspernatur soluta
                                aut consequuntur! Ratione, sed corrupti? Quisquam explicabo commodi quaerat impedit
                                eaque voluptates nostrum laudantium modi ipsam necessitatibus, neque totam, eligendi
                                odit assumenda voluptatum? Pariatur, quidem unde repellat aut veniam eligendi!
                                Reiciendis, assumenda?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sequi commodi reiciendis
                                totam laboriosam? In, saepe suscipit consectetur, laborum velit nisi rem, alias harum
                                laboriosam culpa repudiandae asperiores. Veritatis quae soluta eum accusamus blanditiis
                                ex voluptas deleniti fuga nisi, illum iusto libero doloribus incidunt consectetur,
                                reiciendis, dolorum sed placeat repudiandae laudantium! Rem necessitatibus dicta maiores
                                ea tempore quae, officia doloribus ipsum impedit quidem illum, ex ad aspernatur soluta
                                aut consequuntur! Ratione, sed corrupti? Quisquam explicabo commodi quaerat impedit
                                eaque voluptates nostrum laudantium modi ipsam necessitatibus, neque totam, eligendi
                                odit assumenda voluptatum? Pariatur, quidem unde repellat aut veniam eligendi!
                                Reiciendis, assumenda?</p>
                        </div>
                        <div className="topic-post-options">
                            <div className="topic-post-option">
                                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                                <p>0 Likes</p>
                            </div>
                            <div className="topic-post-option">
                                <i className="fa fa-comments" aria-hidden="true"></i>
                                <p>0 Comments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
