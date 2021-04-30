import React, { useState } from 'react';
import ApplyForm1 from "./ApplyForm1";
import ApplyForm2 from "./ApplyForm2";
import { addCreditCardLead } from "../actions";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import './ApplyForm.css';

const Apply = () => {

    let [formStep, setFormStep] = useState(2);

    const dispatch = useDispatch();
    const projState = useSelector(state => state, shallowEqual);
    console.log('projectstate', projState);
    const submitForm1 = (e) => {
        //setFormStep(2);
        console.log('e', e);
        dispatch(addCreditCardLead());
    }

    const submitForm2 = (e) => {

        console.log('e', e)
    }


    return (
        <React.Fragment>
            {
                formStep === 1 && <ApplyForm1 onSubmit={submitForm1} />
            }
            {
                formStep === 2 && <ApplyForm2 onSubmit={submitForm2} />
            }
        </React.Fragment>
    );
}

export default Apply;