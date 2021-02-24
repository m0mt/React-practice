import React from 'react';

export default function NumebrSelect({ value, options, onChange, label }) {
    function onChangeOption(e) {
        const value = Number(e.currentTarget.value);
        onChange(value);
    }

    return (
        <div>
            <select onChange={onChangeOption} value={value}>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {label}
        </div>
    );
}