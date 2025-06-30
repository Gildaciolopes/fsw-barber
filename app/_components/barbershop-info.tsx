import { Barbershop } from "@prisma/client"
import Image from "next/image"

import { Avatar, AvatarImage } from "./ui/avatar"
import { Card, CardContent } from "./ui/card"

interface BarbershopInfoProps {
  barbershop: Barbershop
}

export function BarbershopInfo({ barbershop }: BarbershopInfoProps) {
  return (
    <div className="relative flex h-[180px] w-full items-end">
      <Image
        alt={`Mapa da barbearia ${barbershop.name}`}
        src="/map.svg"
        fill
        className="rounded-xl object-cover"
      />

      <Card className="z-50 mx-5 mb-3 w-full rounded-xl lg:mx-12 lg:mb-5">
        <CardContent className="flex items-center gap-3 px-5 py-3">
          <Avatar>
            <AvatarImage src={barbershop.imageUrl} />
          </Avatar>

          <div>
            <h3 className="font-bold">{barbershop.name}</h3>
            <p className="text-xs">{barbershop.address}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
