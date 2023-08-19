/* eslint-disable react/prop-types */

import { useState } from "react";
import MainStudent from "../layout/MainStudent";
import MainStaff from "../layout/MainStaff";

export default function Dashboard() {
    const [isStudent, setIsStudent] = useState(true);

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>Sign Out</li>
                    </ul>
                </nav>
            </header>
            {isStudent ? <MainStudent /> : <MainStaff />}
        </>
    );
}
