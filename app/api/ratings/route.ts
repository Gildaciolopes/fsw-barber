import { NextResponse } from "next/server"
import { getServerSession, type Session } from "next-auth"
import { authOptions } from "@/app/_lib/auth"
import { db } from "@/app/_lib/prisma"

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json(
        { error: "Usuário não autenticado" },
        { status: 401 },
      )
    }

    const body = await req.json()
    const { barbershopId, score, comment } = body

    if (!barbershopId || typeof score !== "number") {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 })
    }

    if (score < 1 || score > 5) {
      return NextResponse.json(
        { error: "Nota deve ser entre 1 e 5" },
        { status: 400 },
      )
    }

    // session.user is augmented with `id` in our `authOptions` callbacks
    const typedSession = session as Session & { user: { id?: string } }
    const userId = typedSession.user?.id as string

    const existing = await db.rating.findFirst({
      where: { userId, barbershopId },
    })

    if (existing) {
      await db.rating.update({
        where: { id: existing.id },
        data: { score, comment },
      })
    } else {
      await db.rating.create({ data: { userId, barbershopId, score, comment } })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    return NextResponse.json({ error: "Erro interno" }, { status: 500 })
  }
}
