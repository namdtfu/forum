import React, {Component} from 'react';
import "./TopicList.css";
import profilePicture from "../../../assets/profile/profilepicture.jpg";
import {Link} from "react-router-dom";

class TopicList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-12">
                    <div className="oneTopic">
                        <div className="content">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Tiêu đề</th>
                                    <th scope="col">Lượt trả lời</th>
                                    <th scope="col">Lượt xem</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row" className="profile-pic"><div><img src={profilePicture} alt=""/></div></th>
                                    <td><Link to="/topicdetail">Tiêu đề bắt buộc phải ghi rõ ngân sách & mục đích sử dụng; nên kèm theo ưu tiên Intel/AMD/NVIDIA; không tư vấn laptop & linh kiện lẻ; vi phạm sẽ xóa!</Link>
                                        <br/>
                                        <span>
                                            <i className="fa fa-user-circle-o" aria-hidden="true"/>&nbsp;
                                            <cite>@tiennam</cite>&nbsp;-&nbsp;
                                            <i className="fa fa-clock-o" aria-hidden="true"/>&nbsp;
                                            <cite title="">Dec 19, 2020</cite>
                                        </span>
                                    </td>
                                    <td>16</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="profile-pic"><div><img src={profilePicture} alt=""/></div></th>
                                    <td><Link to="/topicdetail">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cumque
                                        debitis distinctio impedit
                                        nam possimus reprehenderit veniam voluptatem? Laudantium, unde.</Link>
                                        <br/>
                                        <span>
                                            <i className="fa fa-user-circle-o" aria-hidden="true"/>&nbsp;
                                            <cite>@tiennam</cite>&nbsp;-&nbsp;
                                            <i className="fa fa-clock-o" aria-hidden="true"/>&nbsp;
                                            <cite title="">Dec 19, 2020</cite>
                                        </span>
                                    </td>
                                    <td>16</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="profile-pic"><div><img src={profilePicture} alt=""/></div></th>
                                    <td><Link to="/topicdetail">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cumque
                                        debitis distinctio impedit
                                        nam possimus reprehenderit veniam voluptatem? Laudantium, unde.</Link>
                                        <br/>
                                        <span>
                                            <i className="fa fa-user-circle-o" aria-hidden="true"/>&nbsp;
                                            <cite>@tiennam</cite>&nbsp;-&nbsp;
                                            <i className="fa fa-clock-o" aria-hidden="true"/>&nbsp;
                                            <cite title="">Dec 19, 2020</cite>
                                        </span>
                                    </td>
                                    <td>16</td>
                                    <td>20</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopicList;