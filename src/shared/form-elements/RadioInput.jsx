import React, { useState, useEffect } from 'react';
import { usePlatformFinder } from "../../libs/utilities";
import './components.css';




const RadioInput = ({
    input,
    data,
    type,
    meta: { touched, error }
}) => {
    const platform = usePlatformFinder();

    return data.map((e) => {
        if (platform == 'mobile') {
            return (
                <div key={e.value} style={{ display: 'flex', alignItems: 'center', margin: '10px 0px' }}>
                    <input {...input} type="radio" id={e.value} value={e.value} checked={e.value == input.value} />
                    <label htmlFor={e.value}>{e.label}</label>
                </div>
            );
        }
        return (
            <div key={e.value}>
                <label>
                    {e.label}
                    <input className="custom-radio" {...input} type="radio" value={e.value} checked={e.value == input.value} />
                    <span className="radio-custom"></span>
                </label>
            </div>
        );
    })
}

export default RadioInput;