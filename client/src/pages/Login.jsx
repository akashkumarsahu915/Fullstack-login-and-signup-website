import { Button } from "@/components/ui/button";
import axios from 'axios';
import LoadingBar from "@/LoadingBar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react";
import * as React from 'react';
import Toast from "@/Toast";
import { useNavigate } from "react-router-dom";
function Login() {
    const [loginInp, setLoginInp] = useState({ email: "", password: "" });
    const [signupInp, setSignupInp] = useState({ name: "", password: "", email: "" });
    const [loading, setLoading] = useState(false);  // Loading state
    const [snackbarOpen, setSnackbarOpen] = useState(false); // Snackbar open state
    const [snackbarMessage, setSnackbarMessage] = useState(""); // Snackbar message
    const navigate = useNavigate();



    const changeInputHandler = (e, type) => {
        const { name, value } = e.target;
        if (type === "signup") {
            setSignupInp({ ...signupInp, [name]: value })
        } else {
            setLoginInp({ ...loginInp, [name]: value })
        }
    }



    const handleRegistration = async (type) => {
        const inputData = type === "signup" ? signupInp : loginInp;

        setLoading(true);  // Show the loading spinner when the button is clicked


        try {
            let response;
            if (type === "signup") {
                // Sending signup data to the backend
                response = await axios.post('http://localhost:3000/api/user/register', inputData);

            }
            if (type === "login") {
                // Sending login data to the backend
                response = await axios.post('http://localhost:3000/api/user/login', inputData);
                setTimeout(() => navigate("/"), 1500);
            }


            // Assuming a successful response
            console.log(response.data);
            // You can handle the response here, for example, save the token or redirect to another page
            setSnackbarOpen(true);
            setSnackbarMessage(type === "signup" ? "Signup successful! Please login to continue." : "Login successful! Welcome.");
        } catch (error) {
            // Handle error (e.g., invalid credentials, server errors)
            console.error("Error during request:", error);
            // alert("An error occurred. Please try again.");
            setSnackbarOpen(true);
            setSnackbarMessage("login failed")

        } finally {
            setLoading(false);  // Hide the loading spinner after the request finishes (either success or failure)
        }


    }
    const handleCloseSnackbar = () => {
        setSnackbarOpen(false); // Close the Snackbar
    };


    return (
        <div className="flex items-center w-full justify-center mt-24 ">

            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">Signup</TabsTrigger>
                    <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>SignUP</CardTitle>
                            <CardDescription>
                                Create a  new account and click signup when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input type="text"
                                    name="name"
                                    value={signupInp.name}
                                    placeholder="Enter the name name"
                                    required="true"
                                    onChange={(e) => { changeInputHandler(e, "signup") }} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="name">email</Label>
                                <Input type="email"
                                    value={signupInp.email}
                                    name="email"
                                    placeholder="Enter the email"
                                    required="true"
                                    onChange={(e) => { changeInputHandler(e, "signup") }} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">password</Label>
                                <Input type="password"
                                    name="password"
                                    value={signupInp.password}
                                    placeholder="Enter the password"
                                    onChange={(e) => { changeInputHandler(e, "signup") }}
                                    required="true" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => {
                                handleRegistration("signup")
                            }} >Signup  </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Login your password here after the signup.you will be logged in
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email"
                                    type="email"
                                    onChange={(e) => { changeInputHandler(e, "login") }}
                                    required="true"
                                    name="email"
                                    value={loginInp.email}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    value={loginInp.password}
                                    onChange={(e) => { changeInputHandler(e, "login") }}
                                    required="true" />
                            </div>

                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => { handleRegistration("login") }}>Login</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>


            <LoadingBar loading={loading} />  {/* Loading Bar component */}
            <Toast Open={snackbarOpen}
                message={snackbarMessage}
                onClose={handleCloseSnackbar} />
        </div>
    )
}
export default Login;


