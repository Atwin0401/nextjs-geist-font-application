"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

const BREEDS = [
  { name: "Akita", image: "/breeds/akita.jpg" },
  { name: "Beagle", image: "/breeds/beagle.jpg" },
  { name: "Bichon Frise", image: "/breeds/bichon-frise.jpg" },
  { name: "Border Collie", image: "/breeds/border-collie.jpg" },
]

export default function AddPet() {
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
        <h1 className="text-xl font-semibold">Add Pet Profile</h1>
        <Button variant="ghost" className="text-blue-500">
          Skip
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Input 
          type="search"
          placeholder="Search breed..."
          className="pl-10"
        />
        <svg 
          className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
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
      </div>

      {/* Breed Selection */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Breed</h2>
        <div className="grid grid-cols-2 gap-4">
          {BREEDS.map((breed) => (
            <Card 
              key={breed.name}
              className={`p-4 cursor-pointer hover:border-blue-500 transition-colors
                ${breed.name === "Border Collie" ? "border-blue-500" : ""}`}
              onClick={() => router.push("/dashboard")}
            >
              <div className="aspect-square rounded-lg bg-gray-100 mb-2 flex items-center justify-center">
                <span className="text-4xl">
                  {breed.name === "Akita" && "🐕"}
                  {breed.name === "Beagle" && "🐶"}
                  {breed.name === "Bichon Frise" && "🐩"}
                  {breed.name === "Border Collie" && "🦮"}
                </span>
              </div>
              <p className="text-center font-medium">{breed.name}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
        <div className="w-8 h-1 rounded-full bg-blue-500" />
        <div className="w-1 h-1 rounded-full bg-gray-300" />
        <div className="w-1 h-1 rounded-full bg-gray-300" />
      </div>
    </main>
  )
}
