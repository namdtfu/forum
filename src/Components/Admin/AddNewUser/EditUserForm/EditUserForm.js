import React, {Component} from 'react';
import "./EditUserForm.css";

class EditUserForm extends Component {
    render() {
        return (
            <div className="container editUserForm">
                <div className="row mt-3 border">

                    <div className="col-12 mt-3">
                        <h5>Chỉnh Sửa Tài Khoản</h5>
                    </div>

                    <div className="col-12 mt-3 mb-3">
                        <div className="form-group row">
                            {/*<label htmlFor="inputPassword" className="col-2 col-form-label">Tên đăng nhập</label>*/}
                            {/*<div className="col-10">*/}
                            {/*    <input type="password" className="form-control" id="inputPassword"*/}
                            {/*           placeholder="Password" />*/}
                            {/*</div>*/}
                            <label htmlFor="inputPassword" className="col-2 col-form-label">Tên đăng nhập</label>
                            <div className="col-4">
                                <input type="text" className="form-control" id="inputPassword"
                                       placeholder="Password" />
                            </div>
                            <label htmlFor="inputPassword" className="col-2 col-form-label">Email</label>
                            <div className="col-4">
                                <input type="email" className="form-control" id="inputPassword"
                                       placeholder="Password" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-2 col-form-label">Họ và tên</label>
                            <div className="col-4">
                                <input type="text" className="form-control" id="inputPassword"
                                       placeholder="Password" />
                            </div>
                            <label htmlFor="inputPassword" className="col-2 col-form-label">Giới tính</label>
                            <div className="col-4">
                                <select className="custom-select" id="">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-2 col-form-label">Di động</label>
                            <div className="col-4">
                                <input type="number" className="form-control" id="inputPassword"
                                       placeholder="Password" />
                            </div>
                            <label htmlFor="inputPassword" className="col-2 col-form-label">Ngày sinh</label>
                            <div className="col-4">
                                <input type="text" className="form-control" id="inputPassword"
                                       placeholder="Password" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-2 col-form-label">Loại người dùng</label>
                            <div className="col-4">
                                <select className="custom-select" id="">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <label htmlFor="inputPassword" className="col-2 col-form-label">Loại phòng ban</label>
                            <div className="col-4">
                                <select className="custom-select" id="">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-2 col-form-label">Mật khẩu</label>
                            <div className="col-4">
                                <input type="password" className="form-control" id="inputPassword"
                                       placeholder="Password" />
                            </div>
                            <label htmlFor="inputPassword" className="col-2 col-form-label">Xác nhận mật khẩu</label>
                            <div className="col-4">
                                <input type="password" className="form-control" id="inputPassword"
                                       placeholder="Password" />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 text-center mb-3">
                        <button className="btn btn-primary">Cập nhật</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUserForm;