import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/Components/ui/card.jsx"
import {Label} from "@/Components/ui/label.jsx"
import {Input} from "@/Components/ui/input.jsx"
import {Button} from "@/Components/ui/button.jsx"
import {useState} from "react";


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(event) {
        event.preventDefault()
        const requestBody = {
            username: email,
            password: password
        }
        await fetch("http://localhost:8080/auth/login", {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            async (response) => {
                if (response.ok) {
                    const token = await response.text()
                    localStorage.setItem("jwtToken", token) //Todo lav om til at bruge httpOnly cookie
                } else if(response.status === 403) {
                    console.error("Login failed") //Todo lav om til at vise en fejlbesked til brugeren
                }
            }
        ).catch((error) => {
            console.error("Error during login:", error)
        })
    }
    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Login</CardTitle>
                <CardDescription>Enter your email and password to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" required
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <Button type="submit" className="w-full bg-[#00693c]">
                            Login
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}