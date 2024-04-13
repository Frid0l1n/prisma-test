import React from "react";
import { Checkbox } from "@/components/ui/checkbox"

export default function Home() {
  return (
    <main className="p-4">
      <div>
      <h1 className="text-3xl font-bold">Todo's</h1>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Todo
      </label>
    </div>
    </main>
  )
}