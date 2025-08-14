import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Logout from "../utils/logOut";
export default function NavBarError(){

    return(
    <Navbar className="`bg-[url('/img/Background.svg')] bg-no-repeat bg-[#120F31] p-4" >
      <NavbarBrand >
        <img src="/img/logo.svg" className="mr-3 h-10 w-10  " alt="App-logo" />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" className="text-gray-200" >
          Dashboard
        </NavbarLink>
        <NavbarLink  href="#" className="text-gray-200">
         Suggestions
        </NavbarLink>
        <NavbarLink href="# " className="text-gray-200 flex items-center gap-1.5  ">
            Add 
        </NavbarLink>
        <NavbarLink  href="#" className="text-gray-200 flex items-center gap-1">
          <Logout/>
           Logout
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
    )

}