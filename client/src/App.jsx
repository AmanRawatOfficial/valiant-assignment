import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./page/Login";
import MainStaff from "./layout/MainStaff";
import MainStudent from "./layout/MainStudent";

export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/student" element={<MainStudent />} />
                    <Route path="/staff" element={<MainStaff />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
            <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{
                    margin: "8px",
                }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                    },
                }}
            />
        </>
    );
}
