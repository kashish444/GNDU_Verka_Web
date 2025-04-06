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
import { Checkbox } from "@/components/ui/checkbox";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
export default function AdminLoginPage() {
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
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      placeholder="admin@gndu-verka.ac.in"
                      type="email"
                      className="pl-10"
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
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Remember me for 30 days
                  </Label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#0c2340] hover:bg-[#0c2340]/90"
                >
                  Sign In
                </Button>
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