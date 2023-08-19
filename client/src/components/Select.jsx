/* eslint-disable react/prop-types */

export default function Select({ options, value, onChange, ...props }) {
    return (
        <select
            value={value}
            onChange={onChange}
            {...props}
            className="border border-gray-300 bg-white rounded-md py-2 px-3 shadow-sm appearance-none"
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
