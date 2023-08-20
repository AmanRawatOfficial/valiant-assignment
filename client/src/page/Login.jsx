/* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "../components/Form";
import FormRowVertical from "../components/FormRowVertical";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import { toast } from "react-hot-toast";

export default function Login() {
    // Controlled Component State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("student");

    const navigate = useNavigate();

    async function login(e) {
        try {
            e.preventDefault();

            if (!email || !password || !userType) {
                throw new Error("Some fields are empty");
            }

            const result = await fetch(
                `http://127.0.0.1:8000/api/users/login`,
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json", // Set the content type
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            const loginResult = await result.json();
            if (loginResult.status === "success") {
                if (userType === "student") {
                    navigate("/student");
                } else {
                    navigate("/staff");
                }
            }
        } catch (err) {
            console.error(err);
            toast.error("Provide Credentials");
        }
    }

    return (
        <div className="min-h-screen grid content-center justify-center gap-8">
            <h2 className="text-center">Log in to your account 🙂</h2>
            <Form onSubmit={login}>
                <>
                    <FormRowVertical label="User type">
                        <Select
                            value={userType}
                            options={[
                                { value: "student", label: "Student" },
                                { value: "staff", label: "Teacher/Staff" },
                            ]}
                            onChange={(e) => setUserType(e.target.value)}
                        />
                    </FormRowVertical>
                    <FormRowVertical label="Email address">
                        <Input
                            required
                            inputType="email"
                            id="email"
                            autoComplete="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormRowVertical>
                    <FormRowVertical label="Password">
                        <Input
                            required
                            inputType="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormRowVertical>
                    <FormRowVertical>
                        <Button size="large" variation="primary">
                            Login
                        </Button>
                    </FormRowVertical>
                </>
            </Form>
        </div>
    );
}
