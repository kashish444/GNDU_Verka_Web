"use client";

import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useRouter } from "next/navigation";
// import { Checkbox } from "@/components/ui/checkbox";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { useState } from "react";
export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.post("/api/auth/login", {
        email: email.toLowerCase().trim().toString(),
        password
      });

      if (response.status === 200) {
        router.push("/admin");
      } else {
        setError("Unexpected response from server.");
      }
    } catch (err: unknown) {
      // Handle error response
      if (
        axios.isAxiosError(err) &&
        err.response &&
        err.response.data?.message
      ) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-bold text-[#0c2340]">
                  Admin Login
                </CardTitle>
                <CardDescription>
                  Enter your credentials to access the admin dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form className="space-y-4" onSubmit={(e) => {e.preventDefault(); handleLogin();}}>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email / Employee Id</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        placeholder="admin@gndu-verka.ac.in"
                        type="text"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        href="/admin/forgot-password"
                        className="text-sm text-amber-600 hover:text-amber-700"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type="password"
                        className="pl-10"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  {/* <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Remember me for 30 days
                  </Label>
                </div> */}
                  <Button
                    type="submit"
                    className="w-full bg-[#0c2340] hover:bg-[#0c2340]/90"
                    onClick={() => {
                      handleLogin();
                    }}
                  >
                    {loading ? "Loading..." : "Login"}
                  </Button>
                  <p className="text-sm text-center text-red-600">
                    {error && error}
                  </p>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-center text-sm text-gray-600">
                  <span>Don&apos;t have an account? </span>
                  <Link
                    href="/signup"
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Sign up
                  </Link>
                </div>
                <div className="text-center text-xs text-gray-500">
                  <p>This login is for administrative staff only.</p>
                  <p>Unauthorized access is prohibited.</p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
