import React, {Component} from "react";
import "./AddNewUserScreen.css";
import {Link} from "react-router-dom";

export default class AddNewUserScreen extends Component {
    render() {
        return (
            <div className="container-fluid addNewUser">
                <div className="row mt-3 border">
                    <div className="col-12 mt-3">
                        <Link to="/addNewUserForm" className="ml-auto">
                            <button type="button" className="btn btn-outline-success ">Thêm mới</button>
                        </Link>
                    </div>
                    <div className="col-12 mt-3">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Tên đăng nhập</th>
                                <th scope="col">Họ và tên</th>
                                <th scope="col">Phòng ban</th>
                                <th scope="col">Chỉnh sửa</th>
                                <th scope="col">Xóa</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>namdtfu</td>
                                <td>Dong Tien Nam</td>
                                <td>PATTT</td>
                                <td>
                                    <Link to="/editUserForm"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                                </td>
                                <td>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>namdtfu</td>
                                <td>Dong Tien Nam</td>
                                <td>PATTT</td>
                                <td>
                                    <Link to="/editUserForm"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                                </td>
                                <td>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>namdtfu</td>
                                <td>Dong Tien Nam</td>
                                <td>PATTT</td>
                                <td>
                                    <Link to="/editUserForm"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                                </td>
                                <td>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}