import React from 'react';
import "./ApplyForm.css";
import { Field, reduxForm } from 'redux-form'
import validate from "./validate";
import textInput from "../shared/form-elements/textinput";
import RadioInput from "../shared/form-elements/RadioInput";

const inlineInput = ({ input, type, meta: { touched, error } }) => {
    return (
        <React.Fragment>
            <input className="form-control inputs" {...input} placeholder="Enter your name" type={type} />
            <span className="error">
                {touched && error && <>{error}</>}&nbsp;</span>
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


const ApplyFormStep1 = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props

    return (
        <section className="form-section pb-5">
            <nav className="navbar-dark">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">credit card</a></li>
                    <li className="breadcrumb-item">Apply</li>
                </ol>
            </nav>
            <h1 className="h1">Apply Online for Credit Card</h1>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center pt-3">
                <div className="col-lg-10 col-sm-12 col-md-10 col-xs-12 row mobile-padding justify-content-center">
                    <form onSubmit={handleSubmit} className="col-lg-12 col-sm-12 col-md-12 col-xs-12 mobile-padding row form-step active">
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
                                component={textInput}
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
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                            <React.Fragment>
                                <label>Name</label>
                                <div className="input-group mb-0">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text p-0">
                                            <Field name="gender" component="select">
                                                <option value="male">Mr</option>
                                                <option value="female">Mrs</option>
                                            </Field>
                                        </span>
                                    </div>
                                    <Field
                                        name="name"
                                        component={inlineInput}
                                        type="text"
                                    />
                                </div>
                            </React.Fragment>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                            <Field
                                name="city"
                                component={textInput}
                                label={"City"}
                                inputIcon={"fa fa-map-marker"}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="input-group-radio">
                                <Field
                                    name="category"
                                    component={categoryRender}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12 text-center pt-3 pb-3 pl-5 pr-5 terms-conditions">
                            <label className="checkbox-inline only-desktop">
                                <input id="terms_qa" className="checkbox-custom" checked="checked" name="input-group-radio" type="checkbox" onChange={() => alert('you must accept terms')} />
                                &nbsp;&nbsp;I have read and I accept the terms of use under the
                                <a className="text-bold text-picton-blue" href="https://www.iservefinancial.com/terms-and-conditions" target="_blank">
                                    &nbsp;Privacy Policy&nbsp;
                                </a>
                                of iServefinancial, I authorize iServefinancial its employees/partners to call/SMS/mail me about their products &amp; offers. I Also appoint iServefinancial as my authorized representativeto receive my Credit information report/score from Equifax and other Credit Bureau/s.<br />
                                <label id="errMsgTerms_qa" className="errorMsg">&nbsp;</label>
                            </label>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center footer-submit-button">
                            <button id="quick-apply_qa" className="btn btn-danger submit">
                                <span id="waiting_qa" className="spinner-border spinner-border-sm waiting" style={{ display: "none" }}></span>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default reduxForm({
    form: 'creditCardForm',
    //validate,
    initialValues: { gender: "male", category: 1, product: 10 },
})(ApplyFormStep1)