/* eslint-disable react/prop-types */

export default function Input({
    inputType,
    id,
    autoComplete,
    value,
    onChange,
}) {
    return (
        <input
            type={inputType}
            id={id}
            autoComplete={autoComplete}
            value={value}
            className="border border-gray-300 bg-white rounded-md py-2 px-3 shadow-sm"
            onChange={(e) => onChange(e)}
        ></input>
    );
}
