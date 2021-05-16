import React, { useState } from 'react';
import { Field, reduxForm, formValueSelector, FieldArray } from 'redux-form'
import textInput from "../../shared/form-elements/textinput";
import RadioInput from "../../shared/form-elements/RadioInput";
import selectInput from "../../shared/form-elements/selectInput";
import { useSelector } from "react-redux";
import MobileForm from "../../shared/layouts/MobileForm";

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
                <div className="col-lg-11 pl-0 pr-0 mr-0 ml-0 pt-3 pb-3 row" key={index} style={{ background: '#f5f5f5', marginTop: 10, borderRadius: 5, border: '1px solid #d3dce4' }}>
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
            <div className="col-lg-1 p-0 mb-4 d-flex justify-content-around">
                <button className="fa fa-plus btn btn-default" onClick={() => fields.push({})}>&nbsp; ADD</button>
                {fields.length > 0 &&
                    <button className="fa fa-minus btn btn-default" onClick={() => fields.remove(fields.length - 1)}>&nbsp; REMOVE</button>
                }
            </div>
            {submitFailed && error && <span>{error}</span>}
        </div>
    )
}

const MobileForm2 = (props) => {

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
        <MobileForm breadcrumb={breadcrumb} h1="Credit Card" formStep="Step 2/2">
            <form onSubmit={handleSubmit} className="col-lg-12 col-sm-12 col-md-12 col-xs-12 row form-step m-0">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="pan"
                        component={textInput}
                        label={"Pan Card Number"}
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
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center footer-submit-button" style={{ justifyContent: 'flex-end' }}>
                    <button className="btn btn-danger submit">
                        Submit
                    </button>
                </div>
            </form>
        </MobileForm>
    );
}

export default MobileForm2;