import React, { Component } from 'react';

const Navbar = () => {

    const styles = {
        brandLogo: {
            height: "36px"
        },
        navItems: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 24px",
        },
        a: {
            color: "#005387",
            fontSize: "15px"
        }
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-light" style={{ backgroundColor: "#fff", borderBottom: "1px solid #f7f7f7" }}>
            <ul className="navbar-nav" style={styles.navItems}>
                <li className="nav-item active">
                    <a className="nav-link" href="#" style={{ padding: "0px", ...styles.a }}>
                        <img style={styles.brandLogo} src="https://www.iservefinancial.com/public/images/logos/iserve-logo-new.svg" />
                    </a>
                </li>
                <li style={{ float: "right" }}>
                    <div className="only-desktop">
                        <div>
                            <a href="tel:7668900900" style={styles.a}>
                                <i className="fa fa-phone"></i>
                                7668900900
                            </a>
                        </div>
                        <div>
                            <a id="home-contact-details" href="mailto:info@iservefinancial.com" style={styles.a}>
                                <i className="fa fa-envelope-square"></i>
                                info@iservefinancial.com
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;