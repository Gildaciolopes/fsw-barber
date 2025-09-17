"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Calendar } from "lucide-react"
import SignInDialog from "./sign-in-dialog"

interface LoginAlertProps {
  children: React.ReactNode
}

const LoginAlert = ({ children }: LoginAlertProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[90%] max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Acesso aos Agendamentos
          </DialogTitle>
          <DialogDescription>
            Para visualizar e gerenciar seus agendamentos, você precisa fazer
            login na plataforma.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Faça login com sua conta do Google para acessar:
          </p>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>• Visualizar agendamentos confirmados</li>
            <li>• Ver histórico de agendamentos finalizados</li>
            <li>• Gerenciar seus horários</li>
          </ul>

          <SignInDialog />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LoginAlert
