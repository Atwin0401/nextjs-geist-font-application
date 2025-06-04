"use client"

import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function Activities() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => router.back()}
        >
          <svg 
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </Button>
      </div>

      {/* Walker Profile */}
      <Card className="p-4 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="w-12 h-12 bg-gray-200">
            <span className="text-xl">H</span>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">Hanna Blair</h2>
              <span className="text-yellow-500 text-sm">★ 4.5</span>
            </div>
            <p className="text-sm text-gray-500">Dog Walker</p>
          </div>
        </div>
      </Card>

      {/* Activity Stats */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500 mb-1">Start Time</p>
            <p className="font-semibold">09:30</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Distance</p>
            <p className="font-semibold">2.7 km</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Timer</p>
            <p className="font-semibold">32:12 min</p>
          </div>
        </div>
      </Card>

      {/* Map Placeholder */}
      <Card className="aspect-square mb-6 bg-blue-50 p-6">
        <div className="w-full h-full border-4 border-dashed border-blue-200 rounded-xl flex items-center justify-center relative">
          <div className="absolute top-1/4 left-1/4 text-2xl">📍</div>
          <div className="absolute bottom-1/4 right-1/4 text-2xl">🏁</div>
          <div className="text-blue-400 text-lg font-medium">Walking Route</div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={() => router.push("/dashboard")}
        >
          End Walk
        </Button>
        <Button 
          className="flex-1 bg-blue-500 hover:bg-blue-600"
          onClick={() => router.push("/dashboard")}
        >
          Complete
        </Button>
      </div>
    </main>
  )
}
