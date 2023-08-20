/* eslint-disable react/prop-types */

import TableData from "../components/TableData";
import TableHeader from "../components/TableHeader";

export default function MainStaff() {
    return (
        <main className="max-w-4xl m-auto">
            <h1 className="text-center my-12">Upload history of students 🫠</h1>
            <div role="table" className="border border-gray-300 rounded-md">
                <TableHeader />
                <TableData />
            </div>
        </main>
    );
}
