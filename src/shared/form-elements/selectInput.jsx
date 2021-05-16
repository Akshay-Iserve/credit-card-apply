import React from 'react';

const selectInput = ({ input, label, className, type, meta: { touched, error }, children }) => (
    <div>
        {label && <label>{label}</label>}
        <div>
            <select {...input} className={className}>
                {children}
            </select>
            {touched && error && <div className="error">{error}</div>}
        </div>
    </div>
)

export default selectInput;