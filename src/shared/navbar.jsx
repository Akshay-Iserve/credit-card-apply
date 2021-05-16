import React, { useEffect, useState } from 'react';
import './navbar.css';
const Navbar = () => {

    const [navigationHeight, setNavigationHeight] = useState(undefined);
    const navigation = React.createRef();

    useEffect(() => {
        setNavigationHeight(navigation.current.offsetHeight);
    }, []);

    return (
        <section style={{ marginBottom: navigationHeight }}>
            <nav ref={navigation} className="navbar navbar-expand-sm navbar-light fixed-top">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#" style={{ padding: "0px" }}>
                            <img className="brand-logo" src="https://www.iservefinancial.com/public/images/logos/iserve-logo-new.svg" />
                        </a>
                    </li>
                    <li className="contact-div">
                        <div className="only-desktop">
                            <div>
                                <a href="tel:7668900900">
                                    <i className="fa fa-phone"></i>
                                &nbsp;7668900900
                            </a>
                            </div>
                            <div>
                                <a id="home-contact-details" href="mailto:info@iservefinancial.com">
                                    <i className="fa fa-envelope-square"></i>
                                &nbsp;info@iservefinancial.com
                            </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default Navbar;