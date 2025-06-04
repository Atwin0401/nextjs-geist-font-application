"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function Health() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-gray-50 p-4">
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
        <h1 className="text-xl font-semibold">Health Card</h1>
        <div className="w-10" />
      </div>

      <div className="space-y-4 mb-8">
        <Card className="p-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              💉
            </div>
            <div>
              <h3 className="font-semibold mb-1">Vaccination Due</h3>
              <p className="text-sm text-gray-500 mb-2">Annual vaccination reminder for Maxi</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">Later</Button>
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600">Schedule</Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
              🦴
            </div>
            <div>
              <h3 className="font-semibold mb-1">Diet Plan Updated</h3>
              <p className="text-sm text-gray-500 mb-2">New nutrition recommendations</p>
              <Button size="sm" variant="outline" className="w-full">View Details</Button>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              ⚖️
            </div>
            <div>
              <h3 className="font-semibold mb-1">Weight Check</h3>
              <p className="text-sm text-gray-500 mb-2">Monthly weight tracking</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">Skip</Button>
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600">Record</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Health Statistics</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2">
                ❤️
              </div>
              <h3 className="font-semibold">Heart Rate</h3>
              <p className="text-sm text-gray-500">Normal</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                🏃
              </div>
              <h3 className="font-semibold">Activity</h3>
              <p className="text-sm text-gray-500">2.7km today</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-2">
                🍽️
              </div>
              <h3 className="font-semibold">Diet</h3>
              <p className="text-sm text-gray-500">On Track</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-2">
                💤
              </div>
              <h3 className="font-semibold">Sleep</h3>
              <p className="text-sm text-gray-500">8hrs avg</p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
