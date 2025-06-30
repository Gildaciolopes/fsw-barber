"use client"

import { Calendar } from "lucide-react"
import Link from "next/link"

import { Button } from "./ui/button"

export function Navbar() {
  return (
    <div className="hidden md:flex">
      <Button className="justify-start gap-2" variant="ghost" asChild>
        <Link href="/bookings">
          <Calendar size={18} />
          Agendamentos
        </Link>
      </Button>
    </div>
  )
}
