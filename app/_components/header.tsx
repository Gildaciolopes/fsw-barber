import Image from "next/image"
import { MenuIcon } from "lucide-react"
import Link from "next/link"

import { Card, CardContent } from "./ui/card"
import SidebarSheet from "./sidebar-sheet"
import { Sheet, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { Navbar } from "./navbar"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5 lg:m-auto lg:w-[1146px] lg:max-w-[94%] lg:p-7 lg:px-0">
        <Link href="/">
          <Image src="/logo.svg" alt="FSW Barber" width={120} height={18} />
        </Link>

        <div className="flex items-center gap-1">
          <Navbar />
          <Sheet>
            <SheetTrigger asChild>
              <Button size={"icon"} variant={"outline"}>
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SidebarSheet />
          </Sheet>
        </div>
      </CardContent>
    </Card>
  )
}

export default Header
