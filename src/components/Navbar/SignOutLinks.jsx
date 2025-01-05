import { useToast } from "@/hooks/use-toast";
import { SignInButton, SignOutButton } from "@clerk/clerk-react";

const SignOutLinks = () => {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      description: "Logout Successfully!!!",
    });
  };

  return (
    <SignOutButton className="w-full" redirectUrl="/">
      <button onClick={handleLogout}>Logout</button>
    </SignOutButton>
  );
};
export default SignOutLinks;
