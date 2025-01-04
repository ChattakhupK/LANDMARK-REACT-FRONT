import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";
import UserIcon from "./UserIcon";
import { Button } from "../ui/button";
import { links } from "@/utils/links";
import { Link } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <AlignLeft />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {links.map((item, index) => {
          return (
            <DropdownMenuItem key={index} asChild>
              <Link to={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuSeparator />
        {/* ยังไม่ได้ล็อคอิน */}
        <SignedOut>
          <DropdownMenuItem asChild>
            <SignInButton mode="modal" className="w-full">
              <button>Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <SignUpButton mode="modal" className="w-full">
              <button>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        {/* ถ้าล็อคอินแล้ว */}
        <SignedIn>
          <DropdownMenuItem asChild>
            {/* <UserButton /> */}
            <SignOutButton className="w-full" />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownListMenu;
