import React, { useState } from 'react';
import { Field, reduxForm, formValueSelector, FieldArray } from 'redux-form'
import textInput from "../../shared/form-elements/textinput";
import RadioInput from "../../shared/form-elements/RadioInput";
import selectInput from "../../shared/form-elements/selectInput";
import { useSelector } from "react-redux";
import DesktopForm from "../../shared/layouts/DesktopForm";


const toggleCreditCard = (props) => {
    let data = [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" }
    ]

    return <RadioInput data={data} {...props} />
}

const renderExistingCC = ({ fields, banks, meta: { error, submitFailed } }) => {

    return (
        <div className="col-lg-12 p-0 m-0 row align-items-center">
            {fields.map((card, index) => (
                <div className="col-lg-11 p-0 m-0 row" key={index}>
                    <div className="col-lg col-md-4 col-sm-6 col-xs-12 form-group">
                        <label>Credit Card Bank</label>
                        <Field name={`${card}.bank_id`} component={selectInput} className="form-control">
                            <option></option>
                            {
                                banks.map((e, i) => {
                                    return (
                                        <option key={i} value={e.bank_id}>{e.bank_name}</option>
                                    );
                                })
                            }
                        </Field>
                    </div>
                    <div className="col-lg col-md-4 col-sm-6 col-xs-12 form-group">
                        <Field
                            name={`${card}.credit_limit`}
                            component={textInput}
                            label={"Credit Card Limit"}
                            inputIcon={"fa fa-rupee"}
                        />
                    </div>
                    <div className="col-lg col-md-4 col-sm-6 col-xs-12 form-group">
                        <Field label="Age of Card" name={`${card}.card_age`} component={selectInput} className="form-control">
                            <option></option>
                            <option value="5">less than 6 month</option>
                            <option value="12">6 month to 1yr</option>
                            <option value="24">More than 1 yr</option>
                        </Field>
                    </div>
                </div>
            ))}
            <div className="col-lg-1 p-0 m-0 d-flex justify-content-around">
                <div className="fa fa-plus add-remove-cc-div" onClick={() => fields.push({})}></div>
                {fields.length > 0 &&
                    <div className="fa fa-minus add-remove-cc-div" onClick={() => fields.remove(fields.length - 1)}></div>
                }
            </div>
            {submitFailed && error && <span>{error}</span>}
        </div>
    )
}

const DesktopForm2 = (props) => {

    const { handleSubmit, pristine, reset, submitting } = props
    const selector = formValueSelector('creditCardForm2');

    const currentStore = useSelector(state => {
        const modeOfSalary = selector(state, 'mode_of_salary');
        const activeCC = selector(state, 'active_cc');
        return {
            modeOfSalary: modeOfSalary,
            activeCC: activeCC,
            banks: state.banks
        }
    });

    let breadcrumb = [
        { label: 'Home', href: 'https://www.iservefinancial.com' },
        { label: 'Credit Card', href: 'https://www.iservefinancial.com/credit-card' },
        { label: 'Apply' },
    ]

    return (
        <DesktopForm breadcrumb={breadcrumb} h1="Apply Online for Credit Card">
            <form onSubmit={handleSubmit} className="col-lg-12 col-sm-12 col-md-12 col-xs-12 mobile-padding row form-step active">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="pan"
                        component={textInput}
                        label={"Pan Card Number"}
                        inputIcon={"fa fa fa-address-card-o"}
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field label="Mode of Salary" name="mode_of_salary" component={selectInput} className="form-control">
                        <option value="salary_account">Salary Account</option>
                        <option value="cheque">Cheque</option>
                        <option value="cash">Cash</option>
                    </Field>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    {currentStore.modeOfSalary == 'salary_account' && <>
                        <Field label="Salary received in Bank" name="salary_account_bank" component={selectInput} className="form-control">
                            <option></option>
                            {
                                currentStore.banks.map((e, i) => {
                                    return (
                                        <option key={i} value={e.bank_id}>{e.bank_name}</option>
                                    );
                                })
                            }
                        </Field>
                    </>}
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
                {currentStore.activeCC == "yes" && <FieldArray name="existing_credit_cards" banks={currentStore.banks} component={renderExistingCC} />}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center footer-submit-button">
                    <button id="quick-apply_qa" className="btn btn-danger submit m-3">
                        <span id="waiting_qa" className="spinner-border spinner-border-sm waiting" style={{ display: "none" }}></span>
                        Submit
                    </button>
                </div>
            </form>
        </DesktopForm>
    );
}

export default DesktopForm2;