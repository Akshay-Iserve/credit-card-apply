import React, { useEffect, useState } from 'react';
import DatePicker from 'react-date-picker'

const DateInput = ({ input, label, type, inputIcon, inputIconText, meta: { touched, error } }) => {

    return (<React.Fragment>
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
            <DatePicker
                className="form-control plus-icon p-0"
                format="dd/MM/y"
                value={input.value}
                onChange={input.onChange}
                showLeadingZeros={true}
                monthPlaceholder="mm"
                dayPlaceholder="dd"
                yearPlaceholder="yyyy"
            />
        </div>
        {touched && error && <div className="error">{error}</div>}
    </React.Fragment>)
}

export default DateInput;