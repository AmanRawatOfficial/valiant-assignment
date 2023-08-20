/* eslint-disable react/prop-types */

import DownloadResume from "./DownloadResume";
import ViewResume from "./ViewResume";

function formatDate(isoDateString) {
    if (!isoDateString) return "-";
    // Create a Date object from the ISO string
    const date = new Date(isoDateString);

    // Get day, month, and year components
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months are zero-based
    const year = date.getFullYear();

    // Create the "dd/mm/yyyy" formatted string
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
}

function formatTimeAMPM(isoDateString) {
    if (!isoDateString) return "-";
    // Create a Date object from the ISO string
    const date = new Date(isoDateString);

    // Get hour, minute, and AM/PM components
    let hour = date.getHours();
    const minute = date.getMinutes();
    const ampm = hour >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    if (hour > 12) {
        hour -= 12;
    } else if (hour === 0) {
        hour = 12; // Midnight is 12:00 AM
    }

    // Ensure hour and minute have two digits
    const formattedHour = hour.toString().padStart(2, "0");
    const formattedMinute = minute.toString().padStart(2, "0");

    // Create the "hh:mm AM/PM" formatted string
    const formattedTime = `${formattedHour}:${formattedMinute} ${ampm}`;

    return formattedTime;
}

import { useEffect, useState } from "react";
export default function TableData() {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/users")
            .then((response) => response.json())
            .then((data) => {
                setUsersData(data.data.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    const data = usersData.map((student) => {
        return (
            <div
                role="row"
                key={student._id}
                className="grid grid-cols-5 text-sm py-4 border-b border-gray-300 px-3"
            >
                <div>{student.name}</div>
                <div>{formatDate(student.createdDate)}</div>
                <div>{formatTimeAMPM(student.createdDate)}</div>
                <ViewResume filename={student.resume}>View</ViewResume>
                <DownloadResume filename={student.resume}>
                    Download
                </DownloadResume>
            </div>
        );
    });

    return <section>{data}</section>;
}
