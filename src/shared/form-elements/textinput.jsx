import React from 'react';

const textInput = ({
    input,
    label,
    type,
    inputIcon,
    inputIconText,
    meta: { touched, error }
}) => (
    <React.Fragment>
        <label>{label}</label>
        <div className="input-group mb-0">
            {inputIcon &&
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className={inputIcon}></i>
                    </span>
                </div>}
            {inputIconText &&
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">{inputIconText}</span>
                </div>}
            <input className="form-control inputs" {...input} placeholder={label} type={type} />
        </div>
        {touched && error && <div className="error">{error}</div>}
    </React.Fragment>
)

export default textInput;