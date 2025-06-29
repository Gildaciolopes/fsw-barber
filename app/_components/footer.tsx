import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card className="rounded-none rounded-tl-xl rounded-tr-xl">
        <CardContent className="px-5 py-6 text-center">
          <p className="text-sm text-gray-400">
            Desenvolvido por{" "}
            <span className="font-bold text-[#8162FF] hover:cursor-pointer">
              <a href="https://gildaciolopes.netlify.app/" target="_blank">
                Gildácio Lopes
              </a>
            </span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
