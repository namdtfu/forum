import React from "react";
import profilePicture from "../../assets/profile/profilepicture.jpg";
import "./ListPeople.css";

export default function ListPeople({name}) {
    return (
        <>
            {/* <div className="newfeed-sidebar-header">
          <p className="text-center">{name}</p>
        </div> */}
            <div className="newfeed-sidebar-body mt-3">
                <div>
                    <div>
                        <img src={profilePicture} alt=""/>
                    </div>
                    <div>
                        <p>Phòng Kế toán</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <div>
                        <img src={profilePicture} alt=""/>
                    </div>
                    <div>
                        <p>Phòng Hành chính công</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <div>
                        <img src={profilePicture} alt=""/>
                    </div>
                    <div>
                        <p>Phòng Giải pháp dịch vụ bưu chính</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <div>
                        <img src={profilePicture} alt=""/>
                    </div>
                    <div>
                        <p>Phòng Giải pháp dịch vụ bưu chính</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <div>
                        <img src={profilePicture} alt=""/>
                    </div>
                    <div>
                        <p>Phòng Giải pháp dịch vụ bưu chính</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <div>
                        <img src={profilePicture} alt=""/>
                    </div>
                    <div>
                        <p>Phòng Giải pháp dịch vụ bưu chính</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <div>
                        <img src={profilePicture} alt=""/>
                    </div>
                    <div>
                        <p>Phòng Giải pháp dịch vụ bưu chính</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <div>
                        <img src={profilePicture} alt=""/>
                    </div>
                    <div>
                        <p>Phòng Giải pháp dịch vụ bưu chính</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <div>
                        <img src={profilePicture} alt=""/>
                    </div>
                    <div>
                        <p>Phòng Giải pháp dịch vụ bưu chính</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <div>
                        <img src={profilePicture} alt=""/>
                    </div>
                    <div>
                        <p>Phòng Giải pháp dịch vụ bưu chính</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <div>
                        <img src={profilePicture} alt=""/>
                    </div>
                    <div>
                        <p>Phòng Giải pháp dịch vụ bưu chính</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <div>
                        <img src={profilePicture} alt=""/>
                    </div>
                    <div>
                        <p>Phòng Giải pháp dịch vụ bưu chính</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <div>
                        <img src={profilePicture} alt=""/>
                    </div>
                    <div>
                        <p>Phòng Giải pháp dịch vụ bưu chính</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <div>
                        <img src={profilePicture} alt=""/>
                    </div>
                    <div>
                        <p>Phòng Giải pháp dịch vụ bưu chính</p>
                    </div>
                </div>
                <hr/>
            </div>
        </>
    )
}
