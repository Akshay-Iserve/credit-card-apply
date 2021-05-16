import React from 'react';
import { Field } from 'redux-form'
import textInput from "../../shared/form-elements/textinput";
import DateInput from "../../shared/form-elements/DateInput";
import RadioInput from "../../shared/form-elements/RadioInput";
import selectInput from "../../shared/form-elements/selectInput";
import MobileForm from "../../shared/layouts/MobileForm";


const categoryRender = (props) => {
    let data = [
        { label: "Salaried", value: "1" },
        { label: "Self Employed", value: "2" }
    ]

    return <RadioInput data={data} {...props} />
}

const MobileForm1 = (props) => {

    const { handleSubmit, pristine, reset, submitting } = props

    let breadcrumb = [
        { label: 'Home', href: 'https://www.iservefinancial.com' },
        { label: 'Credit Card', href: 'https://www.iservefinancial.com/credit-card' },
        { label: 'Apply' },
    ]

    return (
        <MobileForm breadcrumb={breadcrumb} h1="Credit Card" formStep="Step 1/2">
            <form onSubmit={handleSubmit} className="col-lg-12 col-sm-12 col-md-12 col-xs-12 row p-mobile-0 m-0">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="income_pm_net"
                        component={textInput}
                        label={"Net Monthly Income"}
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="income_pm_gross"
                        component={textInput}
                        label={"Gross Monthly Income"}
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="company"
                        component={textInput}
                        label={"Company Name"}
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="email"
                        component={textInput}
                        label={"Email ID"}
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="dob"
                        component={DateInput}
                        label={"Date of Birth"}
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="mobile"
                        component={textInput}
                        label={"Mobile Number"}
                    />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="name"
                        component={textInput}
                        label={"Name"}
                    />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="city"
                        component={textInput}
                        label={"City"}
                    />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="pincode"
                        component={textInput}
                        label={"Pincode"}
                    />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12  form-group">
                    <label>Category</label>
                    <div className="input-group-radio">
                        <Field
                            name="category"
                            component={categoryRender}
                        />
                    </div>
                </div>
                <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12 terms-conditions">
                    <label className="checkbox-inline" style={{ display: 'flex', marginTop: '20px' }}>
                        <input className="checkbox-custom" name="terms" type="checkbox" defaultChecked style={{ height: 'auto' }} onChange={() => alert('you must accept terms')} />
                        <span style={{ marginLeft: '8px', fontSize: '13px' }}>
                            I have read and I accept the terms of use under the
                            <a href="https://www.iservefinancial.com/terms-and-conditions" target="_blank"> Privacy Policy </a>of iServefinancial<span className="hidden-read-more" style={{ display: 'none' }}>
                                , I authorize iServefinancial its employees/partners to call/SMS/mail me about their products &amp; offers. I Also appoint iServefinancial as my authorized representative to receive my Credit information report/score from Equifax and other Credit Bureau/s.
                                </span>
                            <span style={{ color: 'blue' }} className="read-more"> Read More.. </span>
                        </span>
                    </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center footer-submit-button">
                    <div style={{ display: 'flex' }}>
                        <a className="fa fa-home home-icon" href="https://www.iservefinancial.com/" />
                        <span style={{ fontSize: '12px', alignSelf: 'center', marginLeft: '10px', textAlign: 'left' }}>You are <br />Only a few steps away</span>
                    </div>
                    <button id="quick-apply_qa" className="btn btn-danger submit">
                        PROCEED
                    </button>
                </div>
            </form>
        </MobileForm>
    );
}

export default MobileForm1;