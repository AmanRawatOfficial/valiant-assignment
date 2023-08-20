/* eslint-disable react/prop-types */

export default function TableHeader() {
    return (
        <header
            role="row"
            className="grid grid-cols-5 text-base bg-gray-200 px-3 py-4"
        >
            <div>Student</div>
            <div>Date</div>
            <div>Time</div>
            <div>Resume</div>
            <div>Resume</div>
        </header>
    );
}
