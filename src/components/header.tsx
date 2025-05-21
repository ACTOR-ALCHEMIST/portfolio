import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    </svg>
  );
};

export default function Header() {
  return (
  
    <div className="sticky top-0 z-50 w-full shadow bg-background">
      <Navbar position="static">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Jasper</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Hobbies
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" href="#">
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#projects">
              Projects
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link href="#">
              <Button variant="default">Contact</Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
