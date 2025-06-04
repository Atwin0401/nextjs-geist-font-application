"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ForgotPassword() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add password reset logic here
    router.push("/auth/login")
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Reset Password</h1>
          <p className="text-gray-500">Enter your email to reset your password</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email"
              type="email" 
              placeholder="Enter your email"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
            Send Reset Link
          </Button>
        </form>

        <div className="text-center">
          <Link 
            href="/auth/login"
            className="text-sm text-blue-500 hover:underline"
          >
            Back to Sign In
          </Link>
        </div>
      </Card>
    </main>
  )
}
