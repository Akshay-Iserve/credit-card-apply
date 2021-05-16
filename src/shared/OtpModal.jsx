import React, { useState, useEffect } from 'react';
import { verifyOTP } from '../actions';

import './otp.css';

const OtpModal = (props) => {

    let [visible, setVisible] = useState(props.visible);
    let [invalid, setInvalid] = useState(false);
    let [otp, setOTP] = useState('');

    useEffect(() => setVisible(props.visible), [props.visible]);

    useEffect(() => setInvalid(props.invalidOTP), [props.invalidOTP]);

    const verifyOTP = async (otp) => {
        await props.verifyOTP(otp);
    }

    if (!visible) {
        return <></>
    }

    return (
        <div className="background-otp">
            <div className="col-md-3 col-xs-12 otp-window" style={{ display: 'block' }}>
                <div className="heading"><span style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>OTP Verification</span></div>
                <div className="sub-heading">Please take a moment to verify your mobile number</div>
                <div className="img-div">
                    <img src="https://www.iservefinancial.com/public/images/otp-pl.png" />
                </div>
                <div className="d-flex flex-column align-items-center">
                    <span className="font-weight-bold">Enter Verification Code</span>
                    <span style={{ fontSize: 12 }}>Check your Mobile inbox for OTP</span>
                    <div>
                        <span className="otp-contact">7276727233</span>
                        <span className="btn-update" onClick={props.closeModal}>Update</span>
                    </div>
                </div>
                <div className="input-div">
                    <input className="form-control w-100" type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOTP(e.target.value)} />
                </div>
                <div>
                    <button className="btn btn-primary w-100" onClick={() => verifyOTP(otp)}>SUBMIT</button>
                    {invalid && <div className="alert alert-danger mt-2">
                        <strong>Error! </strong>Invalid One Time Password
                    </div>}
                </div>
                <div className="other-ops">
                    <span onClick={() => props.sendOTP()}>Resend OTP</span>
                </div>
            </div>
        </div>
    );
}

export default OtpModal;