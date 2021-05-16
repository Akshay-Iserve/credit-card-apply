import React from 'react';
import { usePlatformFinder } from "../libs/utilities";
import { reduxForm } from 'redux-form'
import validate from "./validate";
import DesktopForm1 from "./forms/DesktopForm1";
import MobileForm1 from "./forms/MobileForm1";

const ApplyFormStep1 = (props) => {

    const platform = usePlatformFinder();

    return (
        <React.Fragment>
            {platform == 'desktop' && <DesktopForm1 {...props} />}
            {platform == 'mobile' && <MobileForm1 {...props} />}
        </React.Fragment>
    );
}

export default reduxForm({
    form: 'creditCardForm1',
    validate,
    initialValues: { gender: "male", category: 1, product: 10 },
    destroyOnUnmount: false
})(ApplyFormStep1)