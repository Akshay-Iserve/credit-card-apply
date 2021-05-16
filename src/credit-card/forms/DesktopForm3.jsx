import React, { useState } from 'react';
import { Field, reduxForm, formValueSelector, FieldArray } from 'redux-form'
import textInput from "../../shared/form-elements/textinput";
import RadioInput from "../../shared/form-elements/RadioInput";
import selectInput from "../../shared/form-elements/selectInput";
import { useSelector } from "react-redux";
import DesktopForm from "../../shared/layouts/DesktopForm";



const DesktopForm3 = (props) => {

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
                            <div className="progress-bar step-progress" id="step-residential-details" style={{ width: '33.33%', background: '#f7f7f7' }}>
                                Residential &amp; Address Details
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="col-lg-12 col-sm-12 col-md-12 col-xs-12 m-0 row form-step active">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                            <Field label="Educational Qualification" name="qualification" component={selectInput} className="form-control">
                                <option></option>
                                <option value="undergraduate">Under Graduate</option>
                                <option value="Graduation">Graduate</option>
                                <option value="PostGraduation">Post Graduate</option>
                                <option value="doctor">Doctor</option>
                                <option value="engineer">Engineer</option>
                                <option value="CA">CA</option>
                            </Field>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                            <Field
                                name="designation"
                                component={textInput}
                                label={"Work Designation"}
                                inputIcon={"fa fa fa-address-card"}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                            <Field label="Total Work Experience" name="work_experience" component={selectInput} className="form-control">
                                <option></option>
                                <option value="Less than 1 year">Less than 1 year</option>
                                <option value="2">2 years</option>
                                <option value="3">3 years</option>
                                <option value="4">4 years</option>
                                <option value="5">5 years</option>
                                <option value="6">6 years</option>
                                <option value="7">7 years</option>
                                <option value="8">8 years</option>
                                <option value="9">9 years</option>
                                <option value="More than 9 years">More than 9 years</option>
                            </Field>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                            <Field
                                name="official_email"
                                component={textInput}
                                label={"Official Email"}
                                inputIcon={"fa fa-envelope-o"}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                            <Field
                                name="office_city"
                                component={textInput}
                                label={"City"}
                                inputIcon={"fa fa-map-marker"}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                            <Field
                                name="office_state"
                                component={textInput}
                                label={"State"}
                                inputIcon={"fa fa-map-marker"}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 form-group">
                            <Field
                                name="office_pincode"
                                component={textInput}
                                label={"Pincode"}
                                inputIcon={"fa fa-map-marker"}
                            />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center footer-submit-button">
                            <button id="quick-apply_qa" className="btn btn-danger submit m-3">
                                Submit
                            </button>
                        </div>
                    </form>
                </DesktopForm>
            </div>
        </section>
    );
}

export default DesktopForm3;