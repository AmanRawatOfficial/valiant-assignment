/* eslint-disable react/prop-types */

const studentData = [
    {
        id: 1,
        name: "Student Name",
        date: "Date",
        time: "Time",
        resume: "Resume",
    },
    {
        id: 2,
        name: "Student Name",
        date: "Date",
        time: "Time",
        resume: "Resume",
    },
    {
        id: 3,
        name: "Student Name",
        date: "Date",
        time: "Time",
        resume: "Resume",
    },
    {
        id: 4,
        name: "Student Name",
        date: "Date",
        time: "Time",
        resume: "Resume",
    },
    {
        id: 5,
        name: "Student Name",
        date: "Date",
        time: "Time",
        resume: "Resume",
    },
    {
        id: 6,
        name: "Student Name",
        date: "Date",
        time: "Time",
        resume: "Resume",
    },
    {
        id: 7,
        name: "Student Name",
        date: "Date",
        time: "Time",
        resume: "Resume",
    },
    {
        id: 8,
        name: "Student Name",
        date: "Date",
        time: "Time",
        resume: "Resume",
    },
    {
        id: 9,
        name: "Student Name",
        date: "Date",
        time: "Time",
        resume: "Resume",
    },
    {
        id: 10,
        name: "Student Name",
        date: "Date",
        time: "Time",
        resume: "Resume",
    },
    {
        id: 11,
        name: "Student Name",
        date: "Date",
        time: "Time",
        resume: "Resume",
    },
];

const data = studentData.map((student) => {
    return (
        <div
            role="row"
            key={student.id}
            className="grid grid-cols-5 text-sm py-4 border-b border-gray-300 px-3"
        >
            <div>{student.name}</div>
            <div>{student.date}</div>
            <div>{student.time}</div>
            <div>{student.resume}</div>
            <div>{student.resume}</div>
        </div>
    );
});

export default function TableData() {
    return <section>{data}</section>;
}
