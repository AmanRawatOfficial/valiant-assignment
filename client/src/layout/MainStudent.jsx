/* eslint-disable react/prop-types */

import { useState } from "react";

import Form from "../components/Form";
import FormRowVertical from "../components/FormRowVertical";
import Input from "../components/Input";
import Button from "../components/Button";
import FileInput from "../components/FileInput";
import { toast } from "react-hot-toast";

export default function MainStudent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [resume, setResume] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setResume(file);
    };

    const handleUpload = (e) => {
        e.preventDefault();

        // Create a FormData object and append the student data to it
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("resume", resume);

        fetch("http://127.0.0.1:8000/api/users/upload", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then(() => {
                // Handle the response data
                toast.success("Uploaded successfully 👏");
            })
            .catch((error) => {
                console.error("Error:", error);
                toast.error("Uploaded failed 😭");
            });

        // Reset the form fields
        setName("");
        setEmail("");
        setPhone("");
        setResume(null);
    };

    return (
        <main>
            <div className="min-h-screen grid content-center justify-center gap-8">
                <h2 className="text-center">Update your details 🙂</h2>
                <Form onSubmit={handleUpload}>
                    <>
                        <FormRowVertical label="Name">
                            <Input
                                inputType="text"
                                id="name"
                                autoComplete="username"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormRowVertical>
                        <FormRowVertical label="Email address">
                            <Input
                                inputType="email"
                                id="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormRowVertical>
                        <FormRowVertical label="Contact">
                            <Input
                                inputType="phone"
                                id="phone"
                                autoComplete="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </FormRowVertical>
                        <FormRowVertical label="Resume">
                            <FileInput onChange={handleFileChange} />
                        </FormRowVertical>
                        <FormRowVertical>
                            <Button size="large" variation="primary">
                                Update
                            </Button>
                        </FormRowVertical>
                    </>
                </Form>
            </div>
        </main>
    );
}
