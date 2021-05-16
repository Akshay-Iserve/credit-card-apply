import React from 'react';
import { usePlatformFinder } from "../libs/utilities";
import { reduxForm } from 'redux-form'
import validate from "./validate";
import DesktopForm4 from "./forms/DesktopForm4";
import MobileForm4 from "./forms/MobileForm4";
import { useLocation } from "react-router-dom";

import SelectedOfferDiv from "./SelectedOfferDiv";

const ApplyFormStep4 = (props) => {

    const platform = usePlatformFinder();

    return (
        <React.Fragment>
            {platform == 'desktop' && <DesktopForm4 {...props} selectedOfferDiv={SelectedOfferDiv} />}
            {platform == 'mobile' && <MobileForm4 {...props} />}
        </React.Fragment>
    );
}

export default reduxForm({
    form: 'creditCardForm4',
    //validate,
    destroyOnUnmount: false
})(ApplyFormStep4)