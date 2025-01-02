// Tạo một component đơn giản
import React from 'react';
import lbook from '../../assets/lbook.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Header.scss'
import avatar from "../../assets/long.jpg"

function Header() {
    return (
        <>
            <div className="header container d-flex align-items-center">
                <img src={lbook} alt="Logo" className="me-5" />

                <div className="search input-group d-flex align-items-center w-50">
                    <div className="form-outline flex-grow-1">
                        <input
                            type="search"
                            id="form1"
                            className="form-control"
                            placeholder="Search"
                        />
                    </div>
                    <button type="button" className="btn btn-primary">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <div className='avt'>
                    Phan Đình Long
                    <img src={avatar} alt="" />
                </div>

            </div>
        </>
    )

}

export default Header;
