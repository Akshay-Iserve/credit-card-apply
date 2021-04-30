import React from 'react';
import "./ApplyForm.css";
import { Field, reduxForm, formValueSelector } from 'redux-form'
import validate from "./validate";
import textInput from "../shared/form-elements/textinput";
import RadioInput from "../shared/form-elements/RadioInput";
import { useSelector } from "react-redux";


const toggleCreditCard = (props) => {
    let data = [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" }
    ]

    return <RadioInput data={data} {...props} />
}

const ApplyFormStep2 = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props

    const selector = formValueSelector('creditCardForm');
    const currentStore = useSelector(state => {
        const mode_of_salary = selector(state, 'mode_of_salary');
        return {
            mode_of_salary: mode_of_salary
        }
    });

    console.log('currentStore', currentStore);

    return (
        <section className="form-section pb-5">
            <nav className="navbar-dark">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">credit card</a></li>
                    <li className="breadcrumb-item">Apply</li>
                </ol>
            </nav>
            <h1 className="h1">Apply 2 Online for Credit Card</h1>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center pt-3">
                <div className="col-lg-10 col-sm-12 col-md-10 col-xs-12 row mobile-padding justify-content-center">
                    <form onSubmit={handleSubmit} className="col-lg-12 col-sm-12 col-md-12 col-xs-12 mobile-padding row form-step active">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                            <label>Mode of Salary</label>
                            <Field name="mode_of_salary" component="select" className="form-control">
                                <option value="salary_account">Salary Account</option>
                                <option value="cheque">Cheque</option>
                                <option value="cash">Cash</option>
                            </Field>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                            {currentStore.mode_of_salary && <Field
                                name="salary_account_bank"
                                component={textInput}
                                label={"Salary received in Bank"}
                                inputIcon={"fa fa-rupee"}
                            />}
                        </div>
                        <div className="col-lg-12 col-md-4 col-sm-6 col-xs-12 form-group">
                            <label>Do you have any Active Credit Card?</label>
                            <div className="input-group-radio" style={{ justifyContent: "flex-start" }}>
                                <Field
                                    name="active_cc"
                                    component={toggleCreditCard}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                            <Field
                                name="existing_card_bank"
                                component={textInput}
                                label={"Bank"}
                                inputIcon={"fa fa-envelope-o"}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                            <Field
                                name="existing_card_limit"
                                component={textInput}
                                label={"Card Limit"}
                                inputIcon={"fa fa-birthday-cake"}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                            <Field
                                name="existing_card_age"
                                component={textInput}
                                label={"Age of Card"}
                            />
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
    initialValues: { mode_of_salary: "salary_account", active_cc: "no" },
})(ApplyFormStep2)