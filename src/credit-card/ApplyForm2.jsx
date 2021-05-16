import React from 'react';
import { usePlatformFinder } from "../libs/utilities";
import { reduxForm } from 'redux-form'
import validate from "./validate";
import DesktopForm2 from "./forms/DesktopForm2";
import MobileForm2 from "./forms/MobileForm2";

const ApplyFormStep2 = (props) => {

    const platform = usePlatformFinder();

    return (
        <React.Fragment>
            {platform == 'desktop' && <DesktopForm2 {...props} />}
            {platform == 'mobile' && <MobileForm2 {...props} />}
        </React.Fragment>
    );
}

export default reduxForm({
    form: 'creditCardForm2',
    validate,
    initialValues: { gender: "male", category: 1, product: 10 },
    destroyOnUnmount: false
})(ApplyFormStep2)