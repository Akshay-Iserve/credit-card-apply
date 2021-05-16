import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./MobileApplyForm.css";


const styles = {
    formSection: {
        flex: '1 1 auto',
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        formDiv: {
            flex: 1,
            overflow: 'scroll',
            formStepHeading: {
                backgroundColor: '#f4f1ff',
                padding: 10,
                fontSize: 20,
                fontWeight: 'bold',
                color: '#1b334b'
            }
        },
        headingSection: {
            backgroundColor: '#1770a3',
            padding: '10px 8px',
            h1: {
                color: '#fff',
                fontSize: 22,
                margin: 0,
                lineHeight: '1em',
                textTransform: 'capitalize',
            },
            subHeading: {
                color: '#f7f7f7',
                fontSize: 12,
                marginTop: 10
            },
        }
    }
}

const MobileForm = (props) => {
    return (
        <section style={styles.formSection} className="pb-5">
            <section style={styles.formSection.headingSection} className="heading-section">
                {props.h1 && <h1 style={styles.formSection.headingSection.h1} className="h1">{props.h1}</h1>}
                <div style={styles.formSection.headingSection.subHeading}>You are almost done.please fill the details below to apply</div>
            </section>
            <section style={styles.formSection.formDiv}>
                {props.formStep && <div style={styles.formSection.formDiv.formStepHeading}>
                    {props.formStep}
                </div>}
                {props.children}
            </section>
        </section>
    );
}

export default MobileForm;
