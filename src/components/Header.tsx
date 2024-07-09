import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

export default function Header() {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <div>Envision Pad</div>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/"} className={navigationMenuTriggerStyle()}>pricing</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <Button>Login</Button>
        <Button variant={"secondary"}>Register</Button>
      </div>
    </nav>
  )
}