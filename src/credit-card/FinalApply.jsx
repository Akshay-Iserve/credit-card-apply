import React, { useState, useEffect } from 'react';
import ApplyForm3 from "./ApplyForm3";
import ApplyForm4 from "./ApplyForm4";
import { addCCDetailsFinal } from "../actions";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useQuery, usePlatformFinder } from "../libs/utilities";
import { fetchBanks } from "../actions";

const Apply = () => {

    let [formStep, setFormStep] = useState(3);
    const dispatch = useDispatch();
    const query = useQuery();
    let token = query.get("token");
    const history = useHistory();

    useEffect(async () => {
        if (!token) {
            history.push('/credit-card');
        }
    }, []);

    const submitForm = async (e) => {
        let updateResp = await dispatch(addCCDetailsFinal(formStep));
        if (updateResp.status == 'success') {

            if (formStep == 3) {
                setFormStep(4);
            } else {
                history.push('/Thank-you');
            }
        }
    }

    return (
        <React.Fragment>
            {formStep === 3 && <ApplyForm3 onSubmit={submitForm} />}
            {formStep === 4 && <ApplyForm4 onSubmit={submitForm} />}
        </React.Fragment>
    );
}

export default Apply;