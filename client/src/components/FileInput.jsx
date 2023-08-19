/* eslint-disable react/prop-types */

export default function FileInput({ onChange }) {
    return (
        <input
            onChange={onChange}
            type="file"
            accept=".pdf"
            className="text-sm file:bg-green-400 file:cursor-pointer file:rounded-md file:text-green-900 file:border-none file:font-medium file:py-2 file:px-3 file:mr-3"
        />
    );
}
