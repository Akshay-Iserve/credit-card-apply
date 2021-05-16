import React, { useState } from 'react';
import { Field, reduxForm, formValueSelector, FieldArray } from 'redux-form'
import textInput from "../../shared/form-elements/textinput";
import RadioInput from "../../shared/form-elements/RadioInput";
import selectInput from "../../shared/form-elements/selectInput";
import { useSelector } from "react-redux";
import DesktopForm from "../../shared/layouts/DesktopForm";



const DesktopForm4 = (props) => {

    const { handleSubmit, pristine, reset, submitting } = props
    const selector = formValueSelector('creditCardForm2');

    const styles = {
        background: {
            position: 'fixed',
            top: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,.75)',
            zIndex: '999999',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
    }

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
        <section style={styles.background}>
            <div className="col-lg-11">
                {props.selectedOfferDiv()}
                <DesktopForm narrowForm="true">
                    <div className="col-md-12 col-sm-12 col-xs-12 p-3">
                        <div className="progress w-100 mb-4">
                            <div className="progress-bar progress-bar-striped progress-bar-animated step-progress" id="step-personal-and-educational-details" style={{ width: '33.33%' }}>
                                Personal Details
                            </div>
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning step-progress" id="step-employment-details" style={{ width: '33.33%' }}>
                                Employment Details
                            </div>
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success step-progress" id="step-residential-details" style={{ width: '33.33%', background: '#f7f7f7' }}>
                                Residential &amp; Address Details
                            </div>
                        </div>
                    </div>
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
                                inputIcon={"fa fa fa-address-card-o"}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                            <Field
                                name="current_area"
                                component={textInput}
                                label={"Residence Locality"}
                                inputIcon={"fa fa fa-address-card-o"}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                            <Field
                                name="current_city"
                                component={textInput}
                                label={"Residence City"}
                                inputIcon={"fa fa-map-marker"}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                            <Field
                                name="current_state"
                                component={textInput}
                                label={"Residence State"}
                                inputIcon={"fa fa-map-marker"}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                            <Field
                                name="current_pincode"
                                component={textInput}
                                label={"Residence Pincode"}
                                inputIcon={"fa fa-map-marker"}
                            />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center footer-submit-button" style={{ justifyContent: 'flex-end' }}>
                            <button className="btn btn-danger submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </DesktopForm>
            </div>
        </section>
    );
}

export default DesktopForm4;