import React, { useState, useEffect } from 'react';
import './components.css';

const RadioInput = ({
    input,
    data,
    type,
    meta: { touched, error }
}) => {

    return data.map((e) => {
        return (
            <div key={e.value}>
                <label>
                    {e.label}
                    <input className="custom-radio" {...input} type="radio" value={e.value} checked={e.value === input.value} />
                    <span className="radio-custom"></span>
                </label>
            </div>
        );
    })
}

export default RadioInput;