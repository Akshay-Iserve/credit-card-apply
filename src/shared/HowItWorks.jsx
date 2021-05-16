import React, { Component } from 'react';

import './hiw.css';

const HowItWorks = () => {
    return (
        <div className="how-its-work bg-white text-center mt-5 only-desktop">
            <div className="container">
                <h2 style={{ fontSize: 30 }}>How it Works</h2>
                <div className="col-sm-12 row">
                    <div className="horizontal-line hidden-xs">&nbsp;</div>
                    <div className="col-sm-4 col-xs-12 d-flex flex-column"><span className="number bg-darkorange">1</span>
                        <h4 className="marg0t">Quick Register</h4>
                        <p>Fill the simple form</p>
                    </div>
                    <div className="col-sm-4 col-xs-12 d-flex flex-column"><span className="number bg-darkorange">2</span>
                        <h4 className="marg0t">Select Multiple offers</h4>
                        <p>List of offers from multiple banks</p>
                    </div>
                    <div className="col-sm-4 col-xs-12 d-flex flex-column"><span className="number bg-darkorange">3</span>
                        <h4 className="marg0t">Apply</h4>
                        <p>Quick apply less than 2 minutes</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HowItWorks;