"use client"

import React, { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/app/_components/ui/button"

interface RatingFormProps {
  barbershopId: string
  initialScore?: number | null
  initialComment?: string | null
}

export default function RatingForm({
  barbershopId,
  initialScore = null,
  initialComment = "",
}: RatingFormProps) {
  const { data: session } = useSession()
  const [score, setScore] = useState<number | null>(initialScore)
  const [comment, setComment] = useState<string>(initialComment || "")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setScore(initialScore)
    setComment(initialComment || "")
  }, [initialScore, initialComment])

  if (!session) {
    return (
      <div className="text-sm">
        <p>Faça login para avaliar esta barbearia.</p>
      </div>
    )
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!score) return alert("Escolha uma nota entre 1 e 5")
    setLoading(true)
    try {
      const res = await fetch("/api/ratings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ barbershopId, score, comment }),
      })

      const data = await res.json()
      if (!res.ok) {
        alert(data?.error || "Erro ao enviar avaliação")
      } else {
        alert("Avaliação registrada com sucesso")
        // reload page to show updated average
        window.location.reload()
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      alert("Erro ao enviar avaliação")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div>
        <span className="sr-only">Escolha uma nota</span>
        <div className="flex items-center justify-center gap-3 md:gap-2">
          {[5, 4, 3, 2, 1].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setScore(n)}
              aria-pressed={score === n}
              className={`flex h-10 w-10 items-center justify-center rounded-md text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                score === n
                  ? "bg-primary text-white shadow-md"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              } md:h-8 md:w-8 md:px-2 md:py-1`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      <div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          className="w-full rounded-md border border-zinc-700 bg-zinc-900 p-3 text-sm text-zinc-100 placeholder-zinc-500 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary/30"
          placeholder="Comentário (opcional)"
        />
      </div>

      <div>
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Enviando..." : "Enviar avaliação"}
        </Button>
      </div>
    </form>
  )
}
