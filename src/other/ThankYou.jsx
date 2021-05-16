import React, { Component, useEffect, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { uploadDocumentLaterEmail } from '../actions';

const ThankYou = () => {

    let [profile, setProfile] = useState(null);

    let dispatch = useDispatch();

    const projState = useSelector(state => state, shallowEqual);

    useEffect(() => {
        setProfile(projState.auth.profile);
    }, [projState.auth.profile]);

    const redirectDocumentUploads = () => {

        let redirectURL = `https://www.iservefinancial.com/credit-card/thank-you/upload-documents?name=${profile.name}&mobile=${profile.mobile}&product=credit-card`;
        window.location = redirectURL;
    }

    const uploadLater = async () => {
        await dispatch(uploadDocumentLaterEmail());

        window.location = `https://www.iservefinancial.com/`;
    }

    return (
        <section id="thank-you-page" className="default-hidden">
            <div className="col-lg-12 d-flex flex-column mt-3" style={{ textAlign: 'center' }}>
                <h1 className="thankyouheading h2" style={{ paddingTop: '10px', fontSize: 25 }}>That's all, thank you!</h1>
                <hr className="divider bg-mantis" />
                <div className="col-md-8 align-self-center mb-5">
                    <div style={{ paddingLeft: '0px' }}>
                        <p className="thankyoudivoutterp text-left">Dear &nbsp;
                        {profile != null && <span>{profile.name}</span>}
                        ,
                        <br /><br />
                        Thank you for applying For
                        <span style={{ color: '#369abd' }}>
                                <strong> Credit Card with iServe Financial !</strong>
                            </span>
                            <br /><br />
                        Your Credit Card Application is in Process.
                        <span id="hdfcAPPID" style={{ color: '#369abd' }} /></p>
                    </div>
                    <p className="thankyoudivoutterp text-left">One of our representative will contact you {profile != null && <span>on {profile.mobile} </span>}shortly to discuss the further process.</p>
                    <p className="thankyoudivoutterp text-left">Have a great time!</p>
                    <br />
                    <div style={{ textAlign: 'center' }}>
                        <p className="thankyoudivoutterp text-center" style={{ marginLeft: '20px' }}>
                            <strong>Please Upload your Documents here</strong>
                        </p>
                        <div className="icon-list-item" style={{ textAlign: 'center' }}>&nbsp;</div>
                        <button id="uploadNow" className=" btn-xs btn-primary btn btn-anis-effect offset-top-20 btn btn-anis-effect upload" onClick={() => redirectDocumentUploads()}> Upload Now </button>
                        <button id="uploadLater" className=" btn-xs btn-primary btn btn-anis-effect offset-top-20 btn btn-anis-effect upload" onClick={() => uploadLater()} style={{ marginLeft: '20px' }}> Upload Later </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ThankYou;