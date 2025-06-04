"use client"

import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 bg-blue-500 text-white">
            <span className="text-xl font-semibold">K</span>
          </Avatar>
          <div>
            <p className="text-gray-500">Hello,</p>
            <h2 className="text-xl font-semibold">Kristin</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </Button>
          <Button variant="ghost" size="icon">
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
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Active Pet Profiles */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Active pet profiles</h3>
          <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">3</span>
        </div>
        <Link href="/pet/maxi">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-2xl font-semibold mb-1">Maxi</h4>
                <p className="text-blue-100">Dog | Border Collie</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-3xl">🐕</span>
              </div>
            </div>
          </Card>
        </Link>
      </div>

      {/* Daily Reports */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Daily Reports</h3>
          <Button variant="ghost" className="text-blue-500">
            View all
          </Button>
        </div>
        <Card className="p-4 mb-4">
          <p className="text-gray-500 text-sm mb-2">All your details in a single place.</p>
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
            🍽️
          </div>
          <Button variant="ghost" className="text-blue-500">
            <svg 
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Button>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Link href="/health">
          <Card className="p-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
              🏥
            </div>
            <h4 className="font-semibold">Health Card</h4>
            <p className="text-sm text-gray-500">3 new updates</p>
          </Card>
        </Link>
        <Link href="/activities">
          <Card className="p-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
              🦮
            </div>
            <h4 className="font-semibold">Activities</h4>
            <p className="text-sm text-gray-500">2 hours</p>
          </Card>
        </Link>
      </div>

      {/* Add Pet Button */}
      <Link href="/add-pet">
        <Button className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 rounded-full w-14 h-14 shadow-lg">
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
              d="M12 4v16m8-8H4" 
            />
          </svg>
        </Button>
      </Link>
    </main>
  )
}
