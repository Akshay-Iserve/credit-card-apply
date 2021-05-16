import React from 'react';
import { Field } from 'redux-form'
import textInput from "../../shared/form-elements/textinput";
import DateInput from "../../shared/form-elements/DateInput";
import RadioInput from "../../shared/form-elements/RadioInput";
import selectInput from "../../shared/form-elements/selectInput";
import DesktopForm from "../../shared/layouts/DesktopForm";

const inlineInput = ({ input, type, meta: { touched, error } }) => {
    return (
        <React.Fragment>
            <input className="form-control inputs" {...input} placeholder="Enter your name" type={type} />
            {touched && error && <div className="error">{error}</div>}
        </React.Fragment>
    );
}

const categoryRender = (props) => {
    let data = [
        { label: "Salaried", value: "1" },
        { label: "Self Employed", value: "2" }
    ]

    return <RadioInput data={data} {...props} />
}

const DesktopForm1 = (props) => {

    const { handleSubmit, pristine, reset, submitting } = props

    let breadcrumb = [
        { label: 'Home', href: 'https://www.iservefinancial.com' },
        { label: 'Credit Card', href: 'https://www.iservefinancial.com/credit-card' },
        { label: 'Apply' },
    ]

    return (
        <DesktopForm breadcrumb={breadcrumb} h1="Apply Online for Credit Card">
            <form onSubmit={handleSubmit} className="col-lg-12 col-sm-12 col-md-12 col-xs-12 row p-mobile-0">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="income_pm_net"
                        component={textInput}
                        label={"Net Monthly Income"}
                        inputIcon={"fa fa-rupee"}
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="income_pm_gross"
                        component={textInput}
                        label={"Gross Monthly Income"}
                        inputIcon={"fa fa-rupee"}
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="company"
                        component={textInput}
                        label={"Company Name"}
                        inputIcon={"fa fa-institution"}
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="email"
                        component={textInput}
                        label={"Email ID"}
                        inputIcon={"fa fa-envelope-o"}
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="dob"
                        component={DateInput}
                        label={"Date of Birth"}
                        inputIcon={"fa fa-birthday-cake"}
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="mobile"
                        component={textInput}
                        label={"Mobile Number"}
                        inputIconText={"+91"}
                    />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 form-group">
                    <React.Fragment>
                        <label>Name</label>
                        <div className="input-group mb-0">
                            <div className="input-group-prepend" style={{ width: '57px' }}>
                                <span className="input-group-text position-absolute p-0">
                                    <Field name="gender" component={selectInput}>
                                        <option value="male">Mr</option>
                                        <option value="female">Mrs</option>
                                    </Field>
                                </span>
                            </div>
                            <div style={{ flexDirection: 'column', flex: 1 }}>
                                <Field
                                    name="name"
                                    component={inlineInput}
                                    type="text"
                                />
                            </div>
                        </div>
                    </React.Fragment>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="city"
                        component={textInput}
                        label={"City"}
                        inputIcon={"fa fa-map-marker"}
                    />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="pincode"
                        component={textInput}
                        label={"Pincode"}
                        inputIcon={"fa fa-map-marker"}
                    />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className="input-group-radio">
                        <Field
                            name="category"
                            component={categoryRender}
                        />
                    </div>
                </div>
                <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12 text-center pt-3 pb-3 pl-5 pr-5 terms-conditions  p-mobile-0">
                    <label className="checkbox-inline">
                        <input className="checkbox-custom" checked="checked" name="input-group-radio" type="checkbox" onChange={() => alert('you must accept terms')} />
                                &nbsp;&nbsp;I have read and I accept the terms of use under the
                                <a className="text-bold text-picton-blue" href="https://www.iservefinancial.com/terms-and-conditions" target="_blank">
                            &nbsp;Privacy Policy&nbsp;
                                </a>
                                of iServefinancial, I authorize iServefinancial its employees/partners to call/SMS/mail me about their products &amp; offers. I Also appoint iServefinancial as my authorized representativeto receive my Credit information report/score from Equifax and other Credit Bureau/s.
                    </label>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center footer-submit-button">
                    <button id="quick-apply_qa" className="btn btn-danger submit">
                        Submit
                    </button>
                </div>
            </form>
        </DesktopForm>
    );
}

export default DesktopForm1;

