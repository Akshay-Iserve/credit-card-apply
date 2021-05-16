import React, { useState, useEffect } from 'react';
import ApplyForm1 from "./ApplyForm1";
import ApplyForm2 from "./ApplyForm2";
import OtpModal from "../shared/OtpModal";
import { addCCDetails1, addCCDetails2, sendOTP, verifyOTP } from "../actions";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Redirect } from 'react-router-dom';

import { fetchBanks } from "../actions";

const Apply = () => {

    let [formStep, setFormStep] = useState(1);
    let [leadId, setLeadId] = useState('');
    let [isSubmitted, setIsSubmitted] = useState(false);
    let [visible, setVisible] = useState(false);
    let [invalidOTP, setInvalidOTP] = useState();
    let [appendToken, setAppendToken] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchBanks()), []);

    const projState = useSelector(state => state, shallowEqual);

    useEffect(() => {
        console.log('projState.auth', projState.auth.mobile_verified);
    }, [projState.auth.mobile_verified]);

    const sendOTPCode = async () => {
        setFormStep(0);
        setVisible(true);
        await dispatch(sendOTP());
    }

    const verifyOTPCode = async (otp) => {
        let response = await dispatch(verifyOTP(otp));

        if (response.status == 'success') {
            setVisible(false);
            submitForm1();
            setInvalidOTP(false);
        } else {
            setInvalidOTP(true);
        }
    }

    const submitForm1 = async (e) => {

        let updateResp = await dispatch(addCCDetails1());
        if (updateResp.status == 'success') {
            setLeadId(updateResp.id);
            setFormStep(2);
        }
    }

    const submitForm2 = async (e) => {
        console.log('e', e);
        let updateResp = await dispatch(addCCDetails2());
        if (updateResp.status == 'success') {
            setAppendToken(updateResp.token);
            console.log('updateResp.status inside', updateResp.status);
        }
        console.log('updateResp', updateResp);
    }


    return (
        <React.Fragment>
            {appendToken != null && <Redirect to={`/credit-card/offers?token=${appendToken}`} />}
            {
                formStep === 1 && <ApplyForm1 onSubmit={sendOTPCode} />
            }
            {
                formStep === 2 && <ApplyForm2 onSubmit={submitForm2} initialValues={{ 'leadId': leadId, mode_of_salary: "salary_account", active_cc: "no", existing_credit_cards: [{}] }} onBack={() => setFormStep(1)} />
            }
            <OtpModal visible={visible} closeModal={() => {
                setFormStep(1);
                setVisible(false);
            }} invalidOTP={invalidOTP} verifyOTP={(otp) => verifyOTPCode(otp)} sendOTP={sendOTPCode} />

        </React.Fragment>
    );
}

export default Apply;