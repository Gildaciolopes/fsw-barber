"use client"

import { Calendar } from "lucide-react"
import Link from "next/link"
import { useSession } from "next-auth/react"

import { Button } from "./ui/button"
import LoginAlert from "./login-alert"

export function Navbar() {
  const { data: session } = useSession()

  return (
    <div className="hidden md:flex">
      {session?.user ? (
        <Button className="justify-start gap-2" variant="ghost" asChild>
          <Link href="/bookings">
            <Calendar size={18} />
            Agendamentos
          </Link>
        </Button>
      ) : (
        <LoginAlert>
          <Button className="justify-start gap-2" variant="ghost">
            <Calendar size={18} />
            Agendamentos
          </Button>
        </LoginAlert>
      )}
    </div>
  )
}
