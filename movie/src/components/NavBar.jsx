import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import ArrowRight from '../utils/icons'
export default function NavBar (){
    return(
    <Navbar className="" >
      <NavbarBrand >
        <img src="/img/logo.svg" className="mr-3 h-10 w-10  " alt="App-logo" />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" className="text-gray-200" >
          Movies
        </NavbarLink>
        <NavbarLink  href="#" className="text-gray-200">
          TV Shows
        </NavbarLink>
        <NavbarLink href="# " className="text-gray-200 flex items-center gap-1.5  ">Suggest me<ArrowRight/>  </NavbarLink>
      </NavbarCollapse>
    </Navbar>
    )
}