import React from 'react';
import { usePlatformFinder } from "../libs/utilities";
import { reduxForm } from 'redux-form'
import validate from "./validate";
import DesktopForm3 from "./forms/DesktopForm3";
import MobileForm3 from "./forms/MobileForm3";
import SelectedOfferDiv from "./SelectedOfferDiv";



const ApplyFormStep3 = (props) => {

    const platform = usePlatformFinder();
    return (
        <React.Fragment>
            {platform == 'desktop' && <DesktopForm3 {...props} selectedOfferDiv={SelectedOfferDiv} />}
            {platform == 'mobile' && <MobileForm3 {...props} />}
        </React.Fragment>
    );
}

export default reduxForm({
    form: 'creditCardForm3',
    validate,
    destroyOnUnmount: false
})(ApplyFormStep3)