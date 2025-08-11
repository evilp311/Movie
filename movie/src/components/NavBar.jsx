import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import ArrowRight from './icons'
export default function NavBar (){
    return(
    <Navbar className=" bg-[#120F31]  p-4 ">
      <NavbarBrand >
        <img src="/img/logo.svg" className="mr-3 h-6 sm:h-9" alt="App-logo" />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" className="text-[#A8AEBF]" >
          Movies
        </NavbarLink>
        <NavbarLink  href="#" className="text-[#A8AEBF]">
          TV Shows
        </NavbarLink>
        <NavbarLink href="# " className="text-[#A8AEBF] flex items-center gap-1.5  ">Suggest me<ArrowRight/>  </NavbarLink>
      </NavbarCollapse>
    </Navbar>
    )
}