import React, {Component} from 'react';
import "./ForumList.css"
import {Link} from "react-router-dom";

class ForumList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-12">
                    <div className="oneForum">
                        <div className="block-header">
                            <h6>Bưu chính chuyển phát</h6>
                        </div>
                        <div className="content">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Topic</th>
                                    <th scope="col">Người tạo</th>
                                    <th scope="col">Lượt xem</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row"><span className="icon-message"></span></th>
                                    <td><Link to="/topicList">Lorem ipsum dolor sit amet, consectetur adipisicing. Laboriosam, magni?</Link></td>
                                    <td>Admin</td>
                                    <td>100</td>
                                </tr><tr>
                                    <th scope="row"><span className="icon-message"></span></th>
                                    <td><Link to="/topicList">Lorem ipsum dolor sit amet, consectetur adipisicing. Laboriosam, magni?</Link></td>
                                    <td>Admin</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <th scope="row"><span className="icon-message"></span></th>
                                    <td><Link to="/topicList">Lorem ipsum dolor sit amet, consectetur adipisicing. Laboriosam,
                                        magni?</Link></td>
                                    <td>Admin</td>
                                    <td>100</td>
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

export default ForumList;