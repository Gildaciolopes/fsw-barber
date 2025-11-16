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
      <div className="flex items-center gap-2">
        {[5, 4, 3, 2, 1].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setScore(n)}
            className={`rounded px-2 py-1 text-sm ${score === n ? "bg-primary font-semibold text-white" : "bg-gray-200 font-semibold text-gray-500"}`}
          >
            {n}
          </button>
        ))}
      </div>

      <div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full rounded border p-2 text-sm font-semibold text-black"
          placeholder="Comentário (opcional)"
        />
      </div>

      <div>
        <Button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar avaliação"}
        </Button>
      </div>
    </form>
  )
}
