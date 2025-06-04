"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function SplashScreen() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-gray-900">Pawly</div>
        <Button variant="ghost" className="text-gray-600 hover:bg-gray-100">
          Skip tour
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 -mt-16">
        <div className="relative w-full max-w-md aspect-square mb-8">
          <Image
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1"
            alt="Happy dog"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover rounded-3xl shadow-lg"
            priority
          />
        </div>

        <div className="text-center space-y-4 max-w-md">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Take care of your pet&apos;s health
          </h1>
          <p className="text-gray-500 text-lg md:text-xl">
            Track your pet&apos;s health records, get reminders for vaccinations, and find the best vets near you.
          </p>
        </div>

        {/* Progress Dots */}
        <div className="flex gap-3 mt-12 mb-16">
          <div className="w-10 h-2 rounded-full bg-blue-500" />
          <div className="w-2 h-2 rounded-full bg-gray-200" />
          <div className="w-2 h-2 rounded-full bg-gray-200" />
        </div>

        {/* Action Button */}
        <div className="w-full max-w-md">
          <Link href="/auth/login" legacyBehavior>
            <a>
              <Button 
                className="w-full bg-blue-500 hover:bg-blue-600 text-lg py-6 rounded-2xl font-semibold shadow-lg transition-all hover:shadow-xl"
              >
                Get Started
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </main>
  )
}
