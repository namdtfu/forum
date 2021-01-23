import React, {Component} from "react";
import "./DecentralizationScreen.css";
import {Link} from "react-router-dom";

export default class DecentralizationScreen extends Component {
    render() {
        return (
            <div className="container-fluid decentralization">
                <div className="row mt-3 border">
                    <div className="col-12 mt-3">
                        <h5>Phân vai trò quản trị</h5>
                    </div>
                    <div className="col-12 mt-3">
                        <Link to="/addNewDecentralization" className="ml-auto">
                            <button type="button" className="btn btn-outline-success ">Thêm mới</button>
                        </Link>
                    </div>
                    <div className="col-12 mt-3">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Tên tài khoản</th>
                                <th scope="col">Phòng ban</th>
                                <th scope="col">Quyền</th>
                                <th scope="col">Chỉnh sửa</th>
                                <th scope="col">Xóa</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Nam</td>
                                <td>PTTT</td>
                                <td>kiểm duyệt</td>
                                <td>
                                    <Link to="/editDecentralization"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                                </td>
                                <td>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Phong</td>
                                <td>PBCVT</td>
                                <td>không kiểm duyệt</td>
                                <td>
                                    <Link to="/editDecentralization"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                                </td>
                                <td>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Bang</td>
                                <td>PATTT</td>
                                <td>kiểm duyệt</td>
                                <td>
                                    <Link to="/editDecentralization"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                                </td>
                                <td>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Bang</td>
                                <td>PATTT</td>
                                <td>kiểm duyệt</td>
                                <td>
                                    <Link to="/editDecentralization"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                                </td>
                                <td>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Bang</td>
                                <td>PATTT</td>
                                <td>kiểm duyệt</td>
                                <td>
                                    <Link to="/editDecentralization"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                                </td>
                                <td>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                    {/*<div className="col-8 mt-3">*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-6 form-group">*/}
                    {/*            <label for="inputName">Họ và tên</label>*/}
                    {/*            <input*/}
                    {/*                type="text"*/}
                    {/*                className="form-control"*/}
                    {/*                placeholder="nhập họ và tên"*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*        <div className="col-6">*/}
                    {/*            <label for="inputName">Loại phòng ban</label>*/}
                    {/*            <select name="" id="" className="form-control">*/}
                    {/*                <option value="">PTCBC</option>*/}
                    {/*                <option value="">PPPTT</option>*/}
                    {/*                <option value="">PATTT</option>*/}
                    {/*            </select>*/}
                    {/*        </div>*/}

                    {/*        <div className="col-6 form-group">*/}
                    {/*            <label for="inputName">Ngày sinh</label>*/}
                    {/*            <input*/}
                    {/*                type="text"*/}
                    {/*                className="form-control"*/}
                    {/*                placeholder="nhập họ và tên"*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*        <div className="col-6">*/}
                    {/*            <label for="inputName">Số điện thoại</label>*/}
                    {/*            <input*/}
                    {/*                type="number"*/}
                    {/*                className="form-control"*/}
                    {/*                placeholder="nhập họ và tên"*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*        <div className="col-6 form-group">*/}
                    {/*            <label for="inputName">Giới tính</label>*/}
                    {/*            <input*/}
                    {/*                type="text"*/}
                    {/*                className="form-control"*/}
                    {/*                placeholder="nhập họ và tên"*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*        <div className="col-6">*/}
                    {/*            <label for="inputName">Email</label>*/}
                    {/*            <input*/}
                    {/*                type="email"*/}
                    {/*                className="form-control"*/}
                    {/*                placeholder="nhập họ và tên"*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}
