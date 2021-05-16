import React, { useState } from 'react';
import { Field, reduxForm, formValueSelector, FieldArray } from 'redux-form'
import textInput from "../../shared/form-elements/textinput";
import RadioInput from "../../shared/form-elements/RadioInput";
import selectInput from "../../shared/form-elements/selectInput";
import { useSelector } from "react-redux";
import MobileForm from "../../shared/layouts/MobileForm";


const MobileForm4 = (props) => {

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
        <MobileForm breadcrumb={breadcrumb} h1="Credit Card" formStep="OFFICIAL DETAILS">
            <form onSubmit={handleSubmit} className="col-lg-12 col-sm-12 col-md-12 col-xs-12 m-0 row form-step">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field label="Residence Type" name="residence_type" component={selectInput} className="form-control">
                        <option></option>
                        <option value="OwnedSelf">Self Owned </option>
                        <option value="Owned-Family">Owned Family</option>
                        <option value="Rented-Family">Rented with Family</option>
                        <option value="Rented-Alone">Rented Alone</option>
                        <option value="Rented-Friends">Rented with riends</option>
                        <option value="PG-Hostel">PG-Hostel</option>
                    </Field>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="current_address"
                        component={textInput}
                        label={"Residencial Address"}
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="current_area"
                        component={textInput}
                        label={"Residence Locality"}
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="current_city"
                        component={textInput}
                        label={"Residence City"}
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="current_state"
                        component={textInput}
                        label={"Residence State"}
                    />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                    <Field
                        name="current_pincode"
                        component={textInput}
                        label={"Residence Pincode"}
                    />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center footer-submit-button" style={{ justifyContent: 'flex-end' }}>
                    <button className="btn btn-danger">
                        Submit
                    </button>
                </div>
            </form>
        </MobileForm>
    );
}

export default MobileForm4;